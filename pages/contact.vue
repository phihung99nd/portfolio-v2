<script setup lang="ts">
import {Email} from '~/assets/js/smtp';
import {required, email} from '@vuelidate/validators';
import {useVuelidate} from '@vuelidate/core';

const contacts = useRuntimeConfig().public.dev.contact;
const toast = useToast();

const contactExpd = ref(true);
const socialExpd = ref(false);

const rules = computed(() => {
  return {
    name: {required},
    email: {required, email},
  };
});
const form = reactive({
  name: '',
  email: '',
  message: ''
})
const v$ = useVuelidate(rules, form);

const sentFlag = ref(false);

function toggleContactExpd() {
  contactExpd.value = !contactExpd.value;
}

function toggleSocialExpd() {
  socialExpd.value = !socialExpd.value;
}

function toExternalLink(url: URL) {
  window.open(url, '_blank');
}

async function sendEmail() {
  await v$.value.$validate();
  if (v$.value.$error) {
    return;
  }
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "phihung99nd@gmail.com",
    Password: "AC9695905B23C8A7FC208FFD935D01A1BAAD",
    To: 'phihung99nd@gmail.com',
    From: 'phihung99nd@gmail.com',
    Subject: 'Portfolio Contact',
    Body: `<div>Name: ${form.name}</div>` +
        `<div>Email: ${form.email}</div>` +
        `<div>Message: ${form.message}</div>`
  }).then(
      message => {
        if (message == 'OK') {
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "phihung99nd@gmail.com",
            Password: "AC9695905B23C8A7FC208FFD935D01A1BAAD",
            To: form.email,
            From: 'phihung99nd@gmail.com',
            Subject: 'Collaboration request success!',
            Body: '<div>I have received your email for collaboration.</div>' +
                '<div>Thank you for your contact and I will reply as soon as possible.</div>'
          }).then(message => {
            if (message == 'OK') {
              toast.add({severity: 'success', summary: 'Email sent', detail: 'Thank you for your contact', life: 3000});
              sentFlag.value = true;
              setTimeout(() => {
                sentFlag.value = false;
              }, 2000)
            } else {
              toast.add({severity: 'error', summary: 'Failed', detail: 'Server error', life: 3000});
            }
          })
        } else {
          toast.add({severity: 'error', summary: 'Failed', detail: 'Server error', life: 3000});
        }
      }
  )
}
</script>

<template>
  <main class="page">
    <div id="mobile-page-title">
      _contact_me
    </div>
    <div id="page-menu" class="hidden md:flex shrink-0 w-full h-full">
      <!--   DESKTOP section   -->
      <div class="list-menu font-fira_regular flex flex-col w-full h-full">
        <div class="text-green-text flex items-center px-4 py-2 border-bot">contact</div>
        <div class="flex flex-col">
          <div class="text-white flex items-center px-4 py-1 text-[0.875rem] border-bot cursor-pointer"
               @click="toggleContactExpd"><i class="pi pi-chevron-right text-[0.75rem] transition-ease"
                                             :class="{ 'rotate-90': contactExpd}"></i>_contact
          </div>
          <div class="flex flex-col text-gray-text overflow-hidden transition-ease border-bot"
               :class="{ 'h-0': !contactExpd}">
            <a :href="`mailto:${contacts.contact.gmail}`" class="flex items-center gap-2 pl-4 py-1 hover:text-green-text cursor-pointer"><i class="pi pi-envelope"></i>
              {{ contacts.contact.gmail }}
            </a>
            <a :href="`tel:${contacts.contact.phone}`" class="flex items-center gap-2 pl-4 py-1 hover:text-green-text cursor-pointer"><i
                class="pi pi-phone"></i>{{ contacts.contact.phone }}
            </a>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-white flex items-center px-4 py-1 text-[0.875rem] border-bot cursor-pointer"
               @click="toggleSocialExpd"><i class="pi pi-chevron-right text-[0.75rem] transition-ease"
                                            :class="{ 'rotate-90': socialExpd}"></i>_social
          </div>
          <div class="flex flex-col text-gray-text overflow-hidden transition-ease" :class="{ 'h-0': !socialExpd}">
            <div class="flex items-center gap-2 pl-4 py-1 hover:text-green-text cursor-pointer"
                 @click="toExternalLink(contacts.social.facebook.url)"><i class="pi pi-facebook"></i>
              {{ contacts.social.facebook.name }}
            </div>
            <div class="flex items-center gap-2 pl-4 py-1 hover:text-green-text cursor-pointer"
                 @click="toExternalLink(contacts.social.github.url)"><i
                class="pi pi-github"></i>{{ contacts.social.github.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="font-fira_regular flex flex-col grow w-full h-full">
      <div class="flex justify-start w-full border-bot">
        <div class="text-green-text max-w-full flex items-center gap-2 border-right px-4 py-2">
          <span class="text-ellipsis overflow-hidden">_form</span>
          <!--          <i class="pi pi-times text-xs"></i>-->
        </div>
      </div>
      <div class="w-full h-full flex">
        <div id="left"
             class="w-full lg:w-1/2 h-full p-5 text-gray-text flex md:border-right">
          <div class="flex flex-col gap-4">
            <div class="text-3xl mb-10">Feel free to contact me <br/> for work</div>
            <div class="flex flex-col gap-4">
              <label for="username">_name:</label>
              <div class="flex flex-col">
                <InputText id="username" v-model="v$.name.$model" :pt="{
              root: (options) => ({ class: ['bg-transparent border w-[300px] h-[36px] p-2', {
                'border-gray-text': !options.props.invalid,
                'border-red-500': options.props.invalid
              }] })
            }" @blur="v$.name.$touch" :invalid="v$.name.$error"/>
                <small v-show="v$.name.$error" id="name-help" class="text-red-500">Please enter your request
                  name</small>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <label for="email">_email:</label>
              <div class="flex flex-col">
                <InputText id="email" v-model="v$.email.$model" :pt="{
              root: (options) => ({ class: ['bg-transparent border w-[300px] h-[36px] p-2', {
                'border-gray-text': !options.props.invalid,
                'border-red-500': options.props.invalid
              }] })
            }" @blur="v$.email.$touch" :invalid="v$.email.$error"/>
                <small v-show="v$.email.$error" id="name-help" class="text-red-500">Please enter valid email</small>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <label for="message">_message:</label>
              <Textarea id="message" v-model="form.message" rows="4" maxlength="256" :pt="{
              root: { class: 'bg-transparent border border-gray-text w-[300px] p-2'}
            }"/>
            </div>
            <button class="button-57" :class="{sent: sentFlag}" @click="sendEmail" role="button"><span class="text">let's collaborate;</span><span
                class="flex item-center text-white">Sent<i class="pi pi-check ml-2"></i></span></button>
          </div>
        </div>
        <div id="right" class="hidden w-1/2 h-full p-5 lg:flex shrink-0 grow-0 pt-[8.25rem]">
          <FormValueCode :form="form"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.list-menu {
  border-right: 1px solid #1d8ad4;
}

/* CSS */
.button-57 {
  position: relative;
  overflow: hidden;
  @apply rounded-md px-4 py-2 bg-green-text text-white font-fira_regular;
  width: fit-content;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-57 span:first-child {
  position: relative;
  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 10;
}

.button-57 span:last-child {
  display: block;
  position: absolute;
  bottom: 0;
  transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 100;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateY(225%) translateX(-50%);
}

.button-57:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  @apply bg-blue-950;
  transform-origin: bottom center;
  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
  transform: skewY(9.3deg) scaleY(0);
  z-index: 50;
}

.button-57.sent:after {
  transform-origin: bottom center;
  transform: skewY(9.3deg) scaleY(2);
}

.button-57.sent span:last-child {
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;
  transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}
</style>

