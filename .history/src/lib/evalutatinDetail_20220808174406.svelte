<script>

</script>

<main class="evaluation-wp">
    <div class="evaluation-detail-wp">
        <div class="questions-wp">
          <div class="drived" />
          <div class="tag-des-wp">
            <span class="title">你遇到了什么问题？<i class="require-icon" /></span>
            <div class="tags-wp">
              <span
                v-for="item in tags"
                :key="item.key"
                :class="item.key === selectTag ? 'selected-tags tags' : 'tags'"
                @click="selectTags(item)"
              >{{ item.value }}</span>
            </div>
          </div>
          <div class="question-des">
            <span class="title">问题描述 <i class="require-icon" /></span>
            <textarea
              v-model="userDesc"
              class="question-text"
              maxlength="200"
              placeholder="很抱歉为您带来不便，请描述您遇到的问题，我们会尽快帮助您解决。（必填，15-200字内）"
              @change="handleChangeDes"
            />
            <span :class="userDesc.length >= 200 ? 'text-numbers warn-text-numbers' : 'text-numbers'">{{ `${userDesc.length}/200` }}</span>
          </div>
          <div class="drived" />
          <div class="phone-wp">
            <span class="title">电话号码</span>
            <input
              type="tel"
              maxlength="11"
              :class="isFocusInput ? 'phone-numnber' : 'default-phone-numnber'"
              placeholder="请留下您的联系方式"
              @focus="handleFocuesInput"
              @change="handleChangePhone"
            >
          </div>
    
          <div class="appendix-wp">
            <span class="title">上传附件</span>
            <span class="appendix-tips">支持：png、jpg、jpeg、mp3、mov、mp4等格式（图片大小不超过10M、音频大小不超过20M）</span>
            <UploaderVue :handle-file-list="handleFileList" />
          </div>
        </div>
        <div
          class="submit-btn"
          @click="submitReviewInfo"
        >
          提交
        </div>
      </div>
</main>