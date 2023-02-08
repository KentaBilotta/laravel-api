<template>
    <div>
        <div class="container">
            <h1>FrontOffice in Vue</h1>

            <div class="row g-3">
                <div v-for="post in arrPosts" :key="post.id" class="col-sm-6 col-md-4">
                    <div class="card h-100">
                        <!-- <img :src="'/storage/' + post.uploaded_img" class="card-img-top" :alt="post.title"> -->
                        <img src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA" class="card-img-top" :alt="post.title">
                        <div class="card-body d-flex flex-column ">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                        <a :href="'/posts/' + post.slug" class="btn btn-primary">Read</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        arrPosts: [],
    };
  },
  created() {
    axios.get('/api/posts')
      .then(response => this.arrPosts = response.data.results);
  },
}
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>
