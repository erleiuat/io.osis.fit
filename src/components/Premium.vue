<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="headline">
                Get Premium
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-btn @click="stripeCheckout()">
                    Checkout
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

    data () {
        return {
            stripe: null,
            elements: null,
            card: null,
            style: {
                base: {
                    color: '#32325d',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            }
        }
    },

    methods: {

        stripeCheckout () {
            Apios.get('account/checkout').then(res => {
                this.stripe.redirectToCheckout({
                    sessionId: res.data.id
                }).then(function (result) {
                })
            })
        }

    },

    mounted () {
        /* eslint-disable no-undef */
        var vm = this
        if (!document.getElementById('stripeJsScript')) {
            var script = document.createElement('script')
            script.id = 'stripeJsScript'
            script.src = 'https://js.stripe.com/v3/'
            script.async = true
            script.onload = function () {
                vm.stripe = Stripe('pk_test_tTcNJEWptmrTUJqrzD3PDGar00SZBdCzrE')
            }
            document.getElementsByTagName('head')[0].appendChild(script)
        } else {
            vm.stripe = Stripe('pk_test_tTcNJEWptmrTUJqrzD3PDGar00SZBdCzrE')
        }
        /* eslint-enable no-undef */
    }

}
</script>

<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
