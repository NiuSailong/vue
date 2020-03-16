<template>
  <div class="home">
    <div class="header">
      <div class="seach-wrap">
        <p class="title">
          <span class="line"></span>
          <span class="text">数据源列表</span>
        </p>
        <div class="input-wrap">
          <p class="seach">
            <input type="text" class="inp" v-model="seachVal" placeholder="搜索全部资源">
            <img src="../../public/static/img/suosou.png" alt="" class="img">
          </p>
          <select name="" id="" class="select">
            <option value="1" class="opation">全部</option>
          </select>
        </div>
      </div>
      <div class="add-wrap">
        <button class="but">
          <img src="../../public/static/img/tianjia.png" alt="" class="img">
          <span class="text">添加数据源</span>
        </button>
        <button class="but" @click="deleteSlide">
          <img src="../../public/static/img/shanchu.png" alt="" class="img">
          <span class="text">删&nbsp;&nbsp;除</span>
        </button>
      </div>
    </div>
    <div class="data-contanier">
      <div class="data-header">
        <p class="all-wrap">
          <input type="checkbox" class="allInp" @input="allChange" :checked="allCheck">
          <span class="all-text">全选</span>
          <span class="text">数据源名称 / 类型 / 描述</span>
        </p>
        <p class="created">创建者</p>
      </div>
      <div class="data-inner">
        <template v-for="(item, index) in data">
          <div :key="index" class="slide">
            <div class="left">
              <p class="check">
                <input
                  type="checkbox"
                  class="checkInp"
                  :checked="item.checked"
                  @input="slideClick(item)"
                >
              </p>
              <p class="img-wrap">
                <img :src="item.picture" alt="" class="img">
              </p>
              <div class="inner">
                <p class="name">{{item.name}}</p>
                <p>
                  <span>数据库类型：{{item.type}}</span>
                  <span>|</span>
                  <span>{{item.timer}}</span>
                </p>
              </div>
            </div>
            <div class="right">
              <img :src="item.createdHeadPortrait" alt="">
              <p>{{item.createdName}}</p>
            </div>
            <p
              :class="{'collection': item.Collection, 'noCollection': !item.Collection}"
              @click="Collection(item)"
            >
              <img src="../../public/static/img/shoucang.png" alt="" class="img">
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      allCheck: false,
      seachVal: "",
      timer: false,
      data: [
        {
          id: 1,
          type: "word",
          timer: new Date().toLocaleString(),
          name: "入职人员新人培训",
          checked: false,
          createdName: "张三",
          createdHeadPortrait: "",
          picture: "",
          Collection: true
        },
        {
          id: 2,
          type: "ppd",
          timer: new Date().toLocaleString(),
          name: "十二月的数据",
          checked: true,
          createdName: "李四",
          createdHeadPortrait: "",
          picture: "",
          Collection: false
        },
        {
          id: 3,
          type: "pdf",
          timer: new Date().toLocaleString(),
          name: "公司年会用品清单",
          checked: false,
          createdName: "王五",
          createdHeadPortrait: "",
          picture: "",
          Collection: true
        },
        {
          id: 4,
          type: "txt",
          timer: new Date().toLocaleString(),
          name: "面试人员名单",
          checked: true,
          createdName: "马六",
          createdHeadPortrait: "",
          picture: "",
          Collection: false
        }
      ]
    };
  },
  methods: {
    // 全选
    allChange() {
      this.allCheck = !this.allCheck;
      this.data &&
        this.data.map((item, index) => {
          item.checked = this.allCheck;
        });
    },
    // 收藏
    Collection(val) {
      this.data &&
        this.data.map((item, index) => {
          if (val.id == item.id) {
            item.Collection = !item.Collection;
          }
        });
    },
    // 每条数据选中
    slideClick(val) {
      let arr =
        this.data &&
        this.data.filter((item, index) => {
          if (val.id == item.id) {
            item.checked = !item.checked;
          }
          return item.checked == true;
        });
      if (arr.length == this.data.length) {
        this.allCheck = true;
      } else {
        this.allCheck = false;
      }
    },
    // 删除
    deleteSlide() {
      let arr =
        this.data &&
        this.data.filter((item, index) => {
          return item.checked == true;
        });
      arr.map((item, index) => {
        this.data.map((val, ind) => {
          if (item.id == val.id) {
            this.data.splice(ind, 1);
          }
        });
      });
      console.log(this.data);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  border-bottom: solid 1px #f2f2f2;
  padding: 0 10px;
  box-sizing: border-box;
  .seach-wrap {
    display: flex;
    .title {
      display: flex;
      align-items: center;
      .line {
        display: inline-block;
        width: 3px;
        height: 18px;
        margin-right: 10px;
        background: #7689da;
      }
      .text {
        font-weight: 800;
        font-size: 16px;
      }
    }
    .input-wrap {
      margin-left: 50px;
      display: flex;
      .seach {
        width: 200px;
        height: 36px;
        background: #ffffff;
        border: solid 1px #cccccc;
        border-radius: 4px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        margin-right: 30px;
        .inp {
          width: 170px;
          height: 100%;
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
          border: none;
          padding: 0 8px;
          box-sizing: border-box;
          font-size: 15px;
          color: #cccccc;
          &::placeholder {
            color: #d7d5d5;
          }
        }
        .img {
          width: 18px;
          height: 18px;
          margin-right: 6px;
        }
      }
      .select {
        cursor: pointer;
        width: 200px;
        height: 36px;
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
        border: solid 1px #cccccc;
        padding: 0 8px;
        box-sizing: border-box;
        color: #d7d5d5;
        font-size: 15px;
        .opation {
          display: inline-block;
          width: 200px;
          height: 36px;
        }
      }
    }
  }
  .add-wrap {
    display: flex;
    .but {
      width: 140px;
      background: #ffffff;
      border: solid 1px #516eff;
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        color: #516eff;
        font-size: 15px;
      }
      .img {
        width: 17px;
        height: 17px;
        margin-right: 10px;
      }
    }
  }
}
.data-contanier {
  width: 100%;
  flex-grow: 1;
  background: #f8f6fa;
  .data-header {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border-bottom: solid 1px #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;
    .all-wrap {
      .all-text {
        font-size: 15px;
        margin-right: 60px;
        font-weight: 800;
      }
      .text {
        font-size: 15px;
        font-weight: 800;
      }
      .allInp {
        width: 16px;
        height: 16px;
        border-radius: 2px;
        outline: none;
        border: solid 1px #cccccc;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .created {
      margin-right: 60px;
      font-size: 15px;
      font-weight: 800;
    }
  }
  .data-inner {
    padding: 0 20px;
    box-sizing: border-box;
    .slide {
      width: 100%;
      background: #ffffff;
      margin: 20px 0;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 0 20px;
      box-sizing: border-box;
      min-height: 120px;
      overflow: hidden;
      .left {
        display: flex;
        align-items: center;
        .checkInp {
          width: 16px;
          height: 16px;
          border-radius: 2px;
          outline: none;
          border: solid 1px #cccccc;
          margin-right: 10px;
          cursor: pointer;
        }
        .img-wrap {
          width: 60px;
          height: 60px;
          border: solid 1px #cccccc;
          border-radius: 40px;
          overflow: hidden;
          margin: 0 15px;
          .img {
            width: 100%;
            height: 100%;
            border-radius: 40px;
          }
        }
        .inner {
          text-align: left;
          > p {
            height: 28px;
            line-height: 28px;
            > span {
              font-size: 12px;
              color: #cccccc;
              &:nth-child(2) {
                margin: 0 10px;
              }
            }
          }
          .name {
            font-weight: 800;
            font-size: 15px;
            color: #000000;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-right: 60px;
        > img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          border: solid 1px #cccccc;
          overflow: hidden;
        }
        > p {
          font-size: 14px;
          color: #cccccc;
          margin-top: 6px;
        }
      }
      .collection {
        position: absolute;
        top: -50px;
        right: -50px;
        background: #cccccc;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        cursor: pointer;
        .img {
          width: 20px;
          height: 20px;
          position: absolute;
          left: 20px;
          bottom: 20px;
        }
      }
      .noCollection {
        position: absolute;
        top: -50px;
        right: -50px;
        background: #536dfd;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        cursor: pointer;
        .img {
          width: 20px;
          height: 20px;
          position: absolute;
          left: 20px;
          bottom: 20px;
        }
      }
    }
  }
}
</style>

