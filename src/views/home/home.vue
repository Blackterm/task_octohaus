<template>
  <div class="row m-0 p-0 pt-5 d-flex justify-content-center">
    <div class="col-10 col-md-4">
      <div class="card p-4" style="border-radius: 5px">
        <textarea
          class="border-0"
          style="resize: none"
          placeholder="Your text here"
          rows="5"
          cols="40"
          v-model="message"
        ></textarea>

        <div class="d-flex">
          <span class="svg-icon">
            <img src="../../../../public/media/icons/ionic-ios-attach.svg" />
          </span>
          <span class="svg-icon ms-3">
            <img src="../../../../public/media/icons/feather-smile.svg" />
          </span>

          <div class="ms-auto">
            <button
              class="btn fw-medium"
              style="background: #9b59b6; border-radius: 5px"
              type="button"
              @click="addMessage"
            >
              <span class="text-light mx-2">SUBMIT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row m-0 p-0 d-flex justify-content-center">
    <div class="col-10 col-md-4 mt-3">
      <div
        v-for="(item, i) in chatList"
        :key="i"
        class="card mb-2"
        style="border-radius: 5px"
      >
        <div class="d-flex flex-stack pt-3 px-3">
          <!--begin::Symbol-->
          <img src="../../../public/media/Ellipse.png" class="circle-image" />
          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="row p-0 m-0">
              <h class="fw-medium text-body-tertiary" style="font-size: 8px">{{
                item.date
              }}</h>

              <h
                class="fw-hover text-body-secondary overflow-auto"
                style="font-size: 13px"
              >
                <h class="fw-semibold" style="color: #9b59b6">{{
                  item.name
                }}</h>

                {{ item.content }}
              </h>
            </div>
          </div>
        </div>
        <el-divider class="m-0 mt-3 mb-1" border-style=" double" />

        <div class="d-flex p-0 m-0 mx-4 mb-2">
          <span class="svg-icon" @click="like(item)">
            <img src="../../../../public/media/icons/feather-thumbs-up.svg" />
          </span>
          <span class="ms-1 text-body-tertiary">{{ item.like }}</span>
          <span class="svg-icon ms-3" @click="dislike(item)">
            <img src="../../../../public/media/icons/feather-thumbs-down.svg" />
          </span>
          <span class="ms-1 text-body-tertiary">{{ item.dislike }}</span>

          <div class="ms-auto">
            <span
              class="svg-icon ms-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="updateMessage(item)"
            >
              <img src="../../../../public/media/icons/feather-edit-3.svg" />
            </span>

            <span class="svg-icon ms-3" @click="deleteMessage(item)">
              <img src="../../../../public/media/icons/feather-trash-2.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="staticBackdrop">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="col">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Edit your message
            </h1>
          </div>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <textarea
            class="border-0"
            style="resize: none"
            placeholder="Your text here"
            rows="5"
            cols="40"
            v-model="updateContent"
          ></textarea>
        </div>

        <div class="d-flex p-3">
          <div class="ms-auto">
            <button
              class="btn fw-medium"
              style="background: #9b59b6; border-radius: 5px"
              type="button"
              @click="setMessage()"
            >
              <span
                class="text-light mx-2"
                data-bs-dismiss="modal"
                aria-label="Close"
                >SUBMIT</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const chatList = ref();
    const message = ref();
    const updateContent = ref();
    const currentIndex = ref();

    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "." +
      (currentdate.getMonth() + 1) +
      "." +
      currentdate.getFullYear() +
      " - " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();

    onMounted(() => {
      chatList.value = JSON.parse(localStorage.getItem("chatList"));
      if (chatList.value == null) {
        setTimeout(function () {
          location.reload();
        }, 1);
      }
    });

    const like = (index) => {
      const _index = chatList.value.indexOf(index);
      chatList.value[_index].like++;
      localStorage.setItem("chatList", JSON.stringify(chatList.value));
    };

    const dislike = (index) => {
      const _index = chatList.value.indexOf(index);
      chatList.value[_index].dislike++;
      localStorage.setItem("chatList", JSON.stringify(chatList.value));
    };

    const deleteMessage = (index) => {
      const _index = chatList.value.indexOf(index);
      chatList.value.pop(_index);
      localStorage.setItem("chatList", JSON.stringify(chatList.value));
    };

    const updateMessage = (index) => {
      currentIndex.value = chatList.value.indexOf(index);
      updateContent.value = chatList.value[currentIndex.value].content;
    };

    const setMessage = () => {
      chatList.value[currentIndex.value].content = updateContent.value;
      localStorage.setItem("chatList", JSON.stringify(chatList.value));
    };

    const addMessage = async () => {
      const newMessage = {
        id: Date.now(),
        name: "Jane Doe",
        content: message.value,
        like: "0",
        dislike: "0",
        date: datetime,
      };

      chatList.value.reverse();

      chatList.value.push(newMessage);

      chatList.value.reverse();

      localStorage.setItem("chatList", JSON.stringify(chatList.value));
    };

    return {
      chatList,
      message,
      updateContent,
      like,
      dislike,
      deleteMessage,
      updateMessage,
      addMessage,
      setMessage,
    };
  },
});
</script>


<style>
textarea:focus {
  outline: none;
}

.circle-image {
  height: 50px;
  max-width: 50px;
  min-width: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>