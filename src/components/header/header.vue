<template>
  <div id="bcs-nav" class="nav">
      <div class="nav-wrap">
          <div class="nav-primary">
              <div class="nav-logo">               
              </div>
              <div class="nav-search">
                    <form action="" method="get" class="search-box">
                        <legend>搜索:</legend>
                        <label for="inp-query"></label>
                        <div class="inp">
                            <input id="inp-query" name="q" size="22" maxlength="60" placeholder="" />
                        </div>
                        <button class="inp-btn" type="submit" value="搜索">
                            <span class="sbico">
                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>

#bcs-nav {
    background: hsl(0, 0%, 100%);
}
#bcs-nav .nav-wrap {
    border-color: #e9e9e2;
}
#bcs-nav a:link, #bcs-nav a:visited {
    color: #614e3c;
    text-decoration: none;
}

.nav {
    width: 100%;
    min-width: 950px;
    overflow: hidden;
    zoom: 1;
    margin-bottom: 5px;
}

.nav .nav-wrap {
    border-bottom: 1px solid #e5ebe4;
}
.nav .nav-primary {
    width: 950px;
    height: 50px;
    margin: 0 auto;
    overflow: visible !important;
    position: relative;
    padding: 10px 0 5px;
    zoom: 1;
}

#bcs-nav .nav-logo {
    background: url('../../assets/logo.png') no-repeat 0 12px;
    background-image: -webkit-image-set(url('../../assets/logo.png') 1x, url('../../assets/logo.png') 2x);
    background-image: -moz-image-set(url('../../assets/logo.png') 1x, url('../../assets/logo.png') 2x);
    background-image: -ms-image-set(url('../../assets/logo.png') 1x, url('../../assets/logo.png') 2x);
    background-image: -o-image-set(url('../../assets/logo.png') 1x, url('../../assets/logo.png') 2x);
    background-size: contain;
}

.nav .nav-logo {
    float: left;
    height: 50px;
    width: 123px;
    margin: 0 13px 0 0;
}

.nav .nav-logo a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 100em;
}

.nav-search {
    margin-left: 145px;
    overflow: visible !important;
    position: relative;
    zoom: 1;
    padding: 10px 0 15px 0;
}

.nav-search .search-box {
    max-width: 656px;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
}

.nav-search legend {
    display: none;
}

.nav-search label {
    position: absolute;
    left: 11px;
    top: 10px;
    line-height: 30px;
    cursor: text;
    color: #bbb;
    width: auto;
}
.nav-search .inp {
    background-color: hsl(0, 0%, 100%);
    border: 1px solid #ccc;
    border-right: none;
    box-shadow: inset 0 1px 2px #eee;
    padding: 2px 6px;
    border-radius: 2px 0 0 2px;

    position: relative;
    align-items: center;
    color: hsla(0, 0%, 6.7%, .4);
    flex: 1;
    flex-basis: 0.000000001px;
    display: flex;
}

.nav-search .inp input {
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: hsla(0, 0%, 6.7%, .8);
    font-family: 'Roboto', 'Noto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-left: 4px;
    max-width: 100%;
    outline: none;
    text-align: left;
    width: 100%;
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    cursor: text;
    padding: 1px;
}

.nav-search .inp-btn {
    cursor: pointer;
    width: 65px;
    border: 1px solid #d3d3d3;;
    background-color: #f8f8f8;
    border-radius: 0 2px 2px 0;
    margin: 0;
}

button {
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-style: solid;
    border-width: 1px;
    padding: 1px 7px 2px;

    align-items: flex-start;
    text-align: center;
    cursor: default;
    box-sizing: border-box;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-image: initial;

    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 11px system-ui;
    -webkit-appearance: button;
}

.nav-search .inp-btn .sbico {
    display: inline-block;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    fill: currentColor;
    height: 20px;
    line-height: 24px;
    position: relative;
    width: 20px;
    cursor: pointer;
    vertical-align: middle;
    padding-left: 15px;
    
    color: #333;
    opacity: 0.6;
}
</style>
