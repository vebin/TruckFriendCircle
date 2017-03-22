<template>
  <div>
      <div class="discuss-list">
        <div class="discuss-title">
            <text class="discuss-text">#违章者#</text><text class="line">/</text>
        </div>
        <div class="discuss-title"><text class="discuss-text">#违章者#</text></div>
        <div class="footer-line"></div>
      </div>
      <div class="discuss-list">
          <div class="discuss-title">
            <text class="discuss-text">#违章者#</text><text class="line">/</text>
          </div>
          <div class="discuss-title">
            <text class="discuss-text" style="color:#F86B4F">更多热议</text>
          </div>
          <div class="footer-line" style="left:0;right:0;"></div>
      </div>
  </div>
</template>

<style scoped>
  .discuss-list{
    flex-direction: row;
    height: 80px;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    background-color: #fff;
  }
  .discuss-title{
    flex: 1;
    justify-content: center;
    align-items:center;
    position: relative;}
  .line{
    position: absolute;
    right: 0;
    top:0;
    font-size: 32px;
    line-height: 80px;
    height: 80px;
    color: #D8D8D8;
  }
  .discuss-text{
    font-size: 32px;
    color: #666;
  }
  .footer-line{
    position: absolute;
    bottom: 0;
    height: 1px;
    left: 30px;
    right: 30px;
    border-bottom-color:#e5e5e5;
    border-bottom-width:1px;
    border-bottom-style:solid;
  }
</style>
