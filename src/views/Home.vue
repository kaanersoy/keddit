<template>
  <div class="container">
    <div class="page-title">
      <h2>Trending Today</h2>
    </div>
    <div class="home">
      <div class="home__posts">
        <posts reddit="all"></posts>
      </div>
      <div class="home__sidebar">
        <div class="recommended">
          <div class="recommended__head">
            <div class="bg">
              <img
                src="https://images.unsplash.com/photo-1614540616297-2442154c55e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixlib=rb-1.2.1&q=80&w=350"
                alt=""
              />
            </div>
            <h5>Recommended for u 👇</h5>
          </div>
          <preloader :loaded="this.$store.state.subreddits.length != 0"></preloader>
          <div class="recommended__body" v-if="this.$store.state.subreddits.length > 0">
            <div
              v-for="subreddit in this.$store.state.subreddits"
              class="recommended__body__row"
              :key="subreddit"
            >
              <span class="photo"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
                  ></path></svg
              ></span>
              <span class="name">
                <router-link :to="subreddit"> {{ subreddit }} </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '../components/Posts';
import Preloader from '../components/Preloader';

export default {
  name: 'Home',
  data: () => ({}),
  components: {
    Posts,
    Preloader,
  },
  methods: {},
};
</script>

<style lang="scss">
$bgcolor: #f0f0f0;
.page-title {
  margin-left: 10px;
  h2 {
    font-size: 60px;
    font-weight: 900;
    margin: 40px 0;
  }
}
.home {
  margin-top: 20px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  &__posts {
    width: calc(100% - 30% - 40px);
  }
  &__sidebar {
    align-self: flex-start;
    background-color: $bgcolor;
    width: calc(100% - 70%);
    border-radius: 8px;
    .recommended {
      &__head {
        width: 100%;
        height: 120px;
        position: relative;
        margin-bottom: 10px;
        border-radius: 8px;
        overflow: hidden;
        h5 {
          position: absolute;
          left: 15px;
          z-index: 2;
          margin: 0;
          bottom: 15px;
          color: #fff;
          font-size: 22px;
        }
        .bg {
          z-index: 1;
          position: absolute;
          top: 0;
          overflow: hidden;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          &::after {
            content: '';
            position: absolute;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0, transparent);
            left: 0;
            width: 100%;
            height: 100%;
            bottom: 0;
            z-index: 1;
          }
          img {
            width: 100%;
          }
        }
      }
      &__body {
        padding: 10px;
        &__row {
          display: flex;
          align-items: center;
          span {
            &.rank {
            }
            &.photo {
              svg {
                width: 30px;
                height: 30px;
              }
            }
            &.name {
              a {
                font-weight: bold;
                color: #101010;
              }
              flex-grow: 1;
            }

            & + span {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
