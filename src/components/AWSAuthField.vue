<template>
  <div>
    <amplify-authenticator :authConfig="authConfig"></amplify-authenticator>
    <amplify-sign-out :signOutConfig="authConfig.signOutConfig"></amplify-sign-out>
  </div>
</template>

<script>
import { API, Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue';

export default {
  name: 'aws-auth-field',
  data () {
    return {
      message: '',
      authConfig: {
        usernameAttributes: 'Email',
        signUpConfig: {
          hideAllDefaults: true,
          signUpFields: [
            {
              label: 'Email',
              key: 'username',
              required: true,
              displayOrder: 1,
              type: 'string',
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 2,
              type: 'password'
            },
            {
              label: 'Nickname',
              key: 'nickname',
              required: true,
              displayOrder: 3,
              type: 'string',
            }
          ]
        }
      },
      signOutConfig: {
      },
    }
  },
}
</script>