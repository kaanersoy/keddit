<template>
  <div id="main">
    <nav>
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">keddit</router-link>
          <div class="searchbar">
            <input
              id="search"
              type="search"
              v-model="searchKeyword"
              @keyup="makeSearch"
              @keydown.esc="(searchKeyword = ''), (isSearching = false)"
              required
            />
            <label class="label-icon" for="search">Search subkeddits</label>
            <span
              class="close"
              v-if="searchKeyword"
              @click="(searchKeyword = ''), (isSearching = false)"
              ><svg
                height="20"
                viewBox="0 0 48 48"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"
                /></svg
            ></span>
            <div class="searchbar__results">
              <preloader :loaded="!isSearchLoading"></preloader>
              <ul v-if="searchResults && isSearching && !isSearchLoading">
                <li
                  v-for="(subreddit, i) in searchResults"
                  :key="i"
                  @click="
                    {
                      searchKeyword = '';
                      isSearching = false;
                    }
                  "
                >
                  <div class="icon">
                    <img
                      v-if="subreddit.data.icon_img"
                      :src="subreddit.data.icon_img"
                      width="30px"
                      height="30px"
                      :alt="subreddit.data.display_name"
                    />
                    <img
                      v-else
                      src="./assets/reddit_icon_32.png"
                      width="30px"
                      height="30px"
                      :alt="subreddit.data.display_name"
                    />
                  </div>
                  <router-link
                    :to="{
                      name: 'subreddit',
                      params: { subreddit: subreddit.data.display_name },
                    }"
                  >
                    {{ subreddit.data.display_name_prefixed }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Preloader from "./components/Preloader";
import CustomFooter from "./components/CustomFooter";
import "normalize.css";
export default {
  name: "App",
  data: () => ({
    isSearching: false,
    searchKeyword: null,
    searchResults: [],
    isSearchLoading: false,
    timeOut: null,
  }),
  components: {
    Preloader,

    CustomFooter,
  },
  methods: {
    makeSearch: function () {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        if (this.searchKeyword.length > 0) {
          this.isSearchLoading = true;
          fetch(
            `https://www.reddit.com/subreddits/search.json?q=${this.searchKeyword}`
          )
            .then((res) => res.json())
            .then((res) => (this.searchResults = res.data.children))
            .then(() => {
              if (this.searchResults.length > 0) {
                this.isSearching = true;
                return (this.isSearchLoading = false);
              }
              this.isSearching = false;
            });
        } else {
          this.isSearchLoading = false;
          this.isSearching = false;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap");

$bgcolor: #dae0e6;
$maincolor: #009688;

.container {
  max-width: 70%;
  margin: 0 auto;
}
body {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bgcolor;
}
nav {
  background-color: $maincolor;
  line-height: inherit;
  height: unset;
  .brand-logo {
    font-size: 30px;
    color: #fff;
    font-weight: 900;
    text-decoration: none;
  }
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    .searchbar {
      position: relative;
      label {
        position: absolute;
        left: 0;
        top: 12px;
        color: rgba($color: #fff, $alpha: 0.8);
        transition: 200ms ease-out;
        pointer-events: none;
      }
      span {
        display: inline-block;
        line-height: 1;
        position: absolute;
        right: -20px;
        bottom: 8px;
        cursor: pointer;
      }
      input {
        height: 40px;
        font-size: 18px;
        font-weight: bold;
        background-color: rgba($color: #fff, $alpha: 0);
        box-shadow: none;
        border: none;
        outline: none;
        border-bottom: 2px solid rgba($color: #fff, $alpha: 0.3);
        color: #fff;
        transition: 300ms ease-out;
        &:focus,
        &:valid {
          & ~ label {
            color: rgba($color: #fff, $alpha: 0.5);
            transform: translate(-10px, -30px) scale(0.8);
          }
        }
      }
      &__results {
        position: absolute;
        top: 50px;
        right: 0;
        width: 400px;
        z-index: 3;
        background-color: #fff;
        ul {
          list-style-type: none;
          padding: 20px 0;
          padding-left: 10px;
          margin: 0;
          li {
            display: flex;
            align-items: center;
            .icon {
              position: absolute;
              width: 30px;
              height: 30px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            a {
              margin-left: 40px;
            }
            & + li {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .container {
    max-width: 90%;
  }
  nav {
    padding: 40px 0;
    .nav-wrapper {
      height: unset;
      display: block;
      a {
        display: block;
        text-align: center;
      }
      .searchbar {
        margin: 0;
        margin-top: 20px;
        input {
          width: 100%;
        }
        &__results {
          left: 0;
          width: 100%;
          ul {
            li {
              height: 30px;
              & + li {
                margin-top: 20px;
                a {
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .container {
    max-width: 90%;
  }
}
</style>
