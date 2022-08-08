<script>
import { onMount } from 'svelte';
import { getQuestions } from '../api/index'
let tags = []
let userDesc = ''
let isFocusInput = false


onMount(async () => {
	console.log('the component has mounted');
    let res = await getQuestions()
    console.log(res, 'res the component has mounted');
});
const handleChangeDes = (e) =>{
    userDesc = e.target.value
}

const submitReviewInfo = () =>{
    console.log('submitReviewInfo')
}
const handleFocuesInput = () =>{
    console.log('handleFocuesInput')
}

const handleChangePhone = () =>{
    console.log('handleChangePhone')
}
</script>

<div class="evaluation-detail-wp">
    <div class="questions-wp">
        <div class="drived" />
        <div class="tag-des-wp">
          <span class="title">你遇到了什么问题？<i class="require-icon" /></span>
          <div class="tags-wp">
            {#each tags as item}
                <li>{`${item.value}`}</li>
                {:else}
                <div>暂无</div>
            {/each}
          </div>
        </div>
        <div class="question-des">
          <span class="title">问题描述 <i class="require-icon" /></span>
          <textarea
            bind:value={userDesc}
            class="question-text"
            maxlength="200"
            placeholder="很抱歉为您带来不便，请描述您遇到的问题，我们会尽快帮助您解决。（必填，15-200字内）"
            on:change={handleChangeDes}
          />
          <span class:active={userDesc.length >= 200 ? 'text-numbers warn-text-numbers' : 'text-numbers'}>{ `${userDesc.length}/200` }</span>
        </div>
        <div class="drived" />
        <div class="phone-wp">
          <span class="title">电话号码</span>
          <input
            type="tel"
            maxlength="11"
            class:active={isFocusInput ? 'phone-numnber' : 'default-phone-numnber'}
            placeholder="请留下您的联系方式"
            on:focus={handleFocuesInput}
            on:change={handleChangePhone}
          >
        </div>
      </div>
      <div
        class="submit-btn"
        on:click={submitReviewInfo}
      >
        提交
      </div>
</div>


<style lang="less">
    .evaluation-detail-wp {
      box-sizing: border-box;
      padding-bottom: 0.6rem;
      width: 100%;
      background-color: rgba(255, 255, 255, 1);
    
      .title {
        display: inline-block;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        font-size: 0.32rem;
        color: rgba(51, 51, 51, 1);
      }
    
      .require-icon {
        display: inline-block;
        width: 0.14rem;
        height: 0.26rem;
        background: url('https://wos.58cdn.com.cn/cDazYxWcDHJ/picasso/neous3rc.png') no-repeat;
        background-size: contain;
      }
    
      .questions-wp {
        display: flex;
        flex-wrap: wrap;
        height: max-content;
    
        .tag-des-wp {
          padding: 0.4rem 0.24rem;
        }
    
        .tags-wp {
          min-height: 4.1rem;
        }
    
        .tags {
          display: inline-block;
          margin-right: 0.24rem;
          margin-top: 0.2rem;
          padding: 0.24rem 0.3rem;
          border-radius: 0.12rem;
          background-color: rgba(247, 247, 247, 1);
        }
    
        .selected-tags {
          padding: 0.22rem 0.28rem;
          border: 0.02rem solid rgba(0, 195, 168, 1);
          background-color: rgba(230, 250, 247, 1);
        }
      }
    
      .question-des {
        position: relative;
        padding: 0.4rem 0.24rem;
        padding-top: 0;
    
        .question-text {
          margin-top: 0.3rem;
          padding: 0.3rem 0.26rem;
          border: 0.01rem solid rgba(240, 240, 241, 1);
          border-radius: 0.16rem;
          width: 7.02rem;
          height: 3.8rem;
          background-color: rgba(247, 247, 247, 1);
          caret-color: #00c3a8;
        }
    
        .text-numbers {
          position: absolute;
          right: 0.6rem;
          bottom: 0.56rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          font-size: 0.26rem;
          color: rgba(153, 153, 153, 1);
        }
    
        .warn-text-numbers {
          color: rgb(236, 12, 12);
        }
      }
    
      .phone-wp {
        display: flex;
        flex-direction: column;
        padding: 0.4rem 0.24rem;
    
        .default-phone-numnber {
          margin-top: 0.36rem;
          padding: 0.1rem 0;
          border-bottom: 0.02rem solid #eaeaea;
          width: 7.02rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          font-size: 0.26rem;
          color: rgba(34, 34, 34, 1);
        }
    
        .phone-numnber {
          margin-top: 0.36rem;
          padding: 0.1rem 0;
          border-bottom: 0.02rem solid #00c3a8;
          width: 7.02rem;
          font-size: 0.3rem;
          caret-color: #00c3a8;
        }
      }
    
      .appendix-wp {
        display: flex;
        flex-direction: column;
        padding: 0 0.24rem;
    
        .appendix-tips {
          margin-top: 0.3rem;
          margin-bottom: 0.2rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          font-size: 0.26rem;
          color: rgba(153, 153, 153, 1);
        }
      }
    
      .drived {
        border-radius: 0.01rem;
        width: 7.5rem;
        height: 0.2rem;
        background-color: rgba(247, 247, 247, 1);
      }
    
      .submit-btn {
        margin: 0 auto;
        margin-top: 0.3rem;
        border-radius: 0.16rem;
        width: 7.02rem;
        height: 0.8rem;
        background-color: #35bb9a;
        line-height: 0.8rem;
        text-align: center;
        color: rgba(255, 255, 255, 1);
      }
    }
</style>