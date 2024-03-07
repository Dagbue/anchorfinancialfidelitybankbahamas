<template>
		<section id="AccountLimitCard" class="account-limit-wrapper">
                      <div class="header">
                        <div class="margin-bottom margin-xxsmall">
                          <div class="text-block-53">Account Limits</div>
                        </div>
                        <div class="text-block-54">Choose account to send and receive limits</div>
                      </div>
                      <div class="account-limit">
                        <a data-w-id="1af93ca9-afc8-781a-3159-f24e782fade1" href="#" class="link-block-4 w-inline-block">
                          <div class="div-block"><img loading="lazy" src="@/assets/images/CanadaCA.svg" alt="">
                            <div class="text-block-78">Canadian Dollar</div>
                          </div>
                          <div><img loading="lazy" src="@/assets/images/Component-3.svg" alt=""></div>
                        </a>
                        <a data-w-id="92cebaa4-68fe-1958-8394-a3001c49d951" href="#" class="link-block-4 w-inline-block">
                          <div class="div-block"><img loading="lazy" src="@/assets/images/Nigeria-NG.svg" alt="">
                            <div class="text-block-78">Nigerian Naira</div>
                          </div>
                          <div><img loading="lazy" src="@/assets/images/Component-3.svg" alt=""></div>
                        </a>
                      </div>
                    </section>
</template>
<script>
	export default {
	name: "AccountLimitCard"
	};
</script>
<style scoped >
   h3 {margin: 40px 0 0; }
   ul {list-style-type: none; padding: 0; }
   li {display: inline-block; margin: 0 10px; }

   .header {
     margin-bottom: 1rem;
   }
   .account-limit {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-orient: vertical;
     -webkit-box-direction: normal;
     -webkit-flex-direction: column;
     -ms-flex-direction: column;
     flex-direction: column;
     grid-column-gap: 16px;
     grid-row-gap: 16px;
   }

   .link-block-4 {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     width: 100%;
     padding: 16px;
     -webkit-box-pack: justify;
     -webkit-justify-content: space-between;
     -ms-flex-pack: justify;
     justify-content: space-between;
     border-radius: 8px;
     background-color: #eaecf0;
     text-decoration: none;
   }

   .div-block {
     display: -webkit-box;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
     -webkit-align-items: center;
     -ms-flex-align: center;
     align-items: center;
     grid-column-gap: 16px;
     grid-row-gap: 16px;
   }

   .text-block-78 {
     color: #1a1d27;
     font-weight: 500;
     text-decoration: none;
   }
</style>

