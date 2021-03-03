<template>
  <div class="card-container">
    <preloader :loaded="loaded"></preloader>
    <div v-if="loaded" class="card-container__wrapper">
      <div v-for="post in posts" :key="posts.indexOf(post)" class="post-card">
        <div class="post-card__head">
          <span class="from"
            >Posted by
            <router-link :to="`/${post.data.subreddit_name_prefixed}`">{{
              post.data.subreddit_name_prefixed
            }}</router-link></span
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
          <a
            :href="post.data.url_overridden_by_dest"
            v-if="!post.data.is_reddit_media_domain"
          >
            {{ post.data.url_overridden_by_dest }}
          </a>
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
  },
};
</script>

<style lang="scss">
$bgcolor: #f0f0f0;
.card-container {
  width: 100%;
  &__head {
    margin-bottom: 50px;
    h2 {
    }
  }
  &__wrapper {
    .post-card {
      background-color: $bgcolor;
      padding: 15px;
      border-radius: 8px;
      & + .post-card {
        margin-top: 50px;
      }
      &__head {
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
        &__img {
          img {
            width: 100%;
          }
        }
        &__video {
          background-color: #292929;
          display: flex;
          justify-content: center;
          video {
          }
        }
      }
    }
  }
}
</style>
