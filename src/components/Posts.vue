<template>
  <div class="card-container">
    <preloader :loaded="loaded"></preloader>
    <div v-if="loaded" class="card-container__wrapper">
      <div v-for="post in posts" :key="posts.indexOf(post)" class="post-card">
        <div class="post-card__head">
          <span class="from"
            >Posted by
            <router-link
              :to="`/${getSubredditNames(post.data.subreddit_name_prefixed)}`"
              >{{ post.data.subreddit_name_prefixed }}</router-link
            ></span
          >
          <span>&#8226;</span>
          <span class="ago">{{ getTime(post.data.created_utc) }}</span>
        </div>
        <div
          class="post-card__body"
          v-bind:class="post.data.post_hint == 'image' ? 'img' : null"
        >
          <h5>{{ post.data.title }}</h5>
          <div v-if="post.data.post_hint == 'image'" class="post-card__body__img">
            <img :src="post.data.url" alt="" />
          </div>
          <div
            v-if="post.data.post_hint == 'hosted:video'"
            class="post-card__body__video"
          >
            <video controls :width="post.data.secure_media.reddit_video.width">
              <source
                :src="post.data.secure_media.reddit_video.fallback_url"
                type="video/webm"
              />
              <source
                :src="post.data.secure_media.reddit_video.fallback_url"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <div v-if="post.data.post_hint == 'link'" class="post-card__body__link">
            <a target="_blank" :href="post.data.url_overridden_by_dest">
              {{ post.data.url_overridden_by_dest.substring(0, 30) + '...' }}
            </a>
            <div class="post-card__body__link__thumbnail">
              <img src="../assets/external-link-symbol.png" alt="" class="ext" />
              <img :src="post.data.thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from './Preloader';
export default {
  name: 'Home',
  data: () => ({
    posts: [],
    loaded: false,
  }),
  mounted: function() {
    this.getPosts(this.reddit);
  },
  components: {
    Preloader,
  },
  watch: {
    reddit: function() {
      this.getPosts(this.reddit);
    },
  },
  props: ['reddit'],
  methods: {
    getPosts: async function(name) {
      this.loaded = false;
      fetch(`https://www.reddit.com/r/${name}.json`)
        .then(res => res.json())
        .then(res => (this.posts = res.data.children))
        .then(() => (this.loaded = true));
    },
    getTime: function(time) {
      const postDate = new Date(time * 1000);
      const dateNow = new Date(Date.now());
      const diffTime = Math.abs(dateNow - postDate);
      const diffMinutes = parseInt(diffTime / (1000 * 60));
      if (diffMinutes < 60) {
        return `${diffMinutes} mins ago`;
      }
      const diffDays = parseInt(diffTime / (1000 * 60 * 60));
      return `${diffDays} hours ago`;
    },
    getSubredditNames: function(name) {
      if (
        this.$store.state.subreddits.includes(name) ||
        this.$store.state.subreddits.length > 5
      ) {
        return name;
      }
      this.$store.commit('addsubreddit', { value: name });
      return name;
    },
  },
};
</script>

<style lang="scss">
$bgcolor: #f0f0f0;
$maincolor: #009688;
$placeholdercolor: #9cece4;
$imgborder: 2px solid
  rgba(
    $color: #009688,
    $alpha: 0.5,
  );
.card-container {
  width: 100%;
  &__head {
    margin-bottom: 10px;
    h2 {
    }
  }
  &__wrapper {
    .post-card {
      border: $imgborder;
      background-color: $bgcolor;
      padding: 15px;
      border-radius: 8px;
      & + .post-card {
        margin-top: 50px;
      }
      &__head {
        position: relative;
        margin-bottom: 30px;
        &:after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 50%;
          height: 2px;
          background-color: rgba($color: $maincolor, $alpha: 0.3);
        }
        span {
          display: inline-block;
          & + span {
            margin-left: 10px;
          }
          &.from {
            a {
              font-weight: bold;
              font-size: inherit;
            }
          }
          &.ago {
            position: relative;
          }
        }
      }
      &__body {
        h5 {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        &__img {
          background-color: $placeholdercolor;
          img {
            display: block;
            border: $imgborder;
            min-width: 50%;
            max-width: 100%;
            margin: 0 auto;
          }
        }
        &__video {
          background-color: $placeholdercolor;
          display: flex;
          justify-content: center;
          video {
            min-width: 50%;
            max-width: 100%;
            border: $imgborder;
          }
        }
        &__link {
          display: flex;
          justify-content: space-between;
          a {
            align-self: flex-start;
          }
          &__thumbnail {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: rgba($color: #000000, $alpha: 0.3);
            width: 150px;
            height: 150px;
            z-index: 2;
            overflow: hidden;
            &:hover {
              img {
                border: $imgborder;
                filter: opacity(0.3);
              }
            }
            img {
              filter: opacity(0.6);
              transition: 300ms filter;
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            & img.ext {
              filter: none;
              position: static;
              z-index: 1;
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
}
@media screen and (maxwidth: 414px) {
}
@media screen and (min-width: 415) and (max-width: 1024px) {
}
</style>
