<!--suppress ALL -->
<template>
  <section id="PersonalInfoCard" class="personal-info-wrapper">
    <div class="header">
      <div class="margin-bottom margin-xxsmall">
        <div class="text-block-53">Personal information</div>
      </div>
      <div class="text-block-54">Update your personal details here.</div>
    </div>
    <div class="form-body">
      <div class="w-form">


        <form v-show="this.userData === 'account1'" id="email-form" name="email-form" data-name="Email Form" method="get">
          <div class="name-wrapper">
            <div class="left">
              <label for="name-2">First name</label>
              <!--                                <input type="text" class="input-field set w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">-->
              <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.FirstName}}</p>
            </div>
            <div class="right">
              <label for="name-4">Last name</label>
              <!--                                <input type="text" class="input-field set w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3">-->
              <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.LastName}}</p>
            </div>
          </div>
          <div class="email-wrapper">
            <label for="name">Email address</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.Email}}</p>
          </div>
<!--          <div class="email-wrapper">-->
<!--            <label for="name-6">Phone number</label>-->
<!--            &lt;!&ndash;                              <input type="text" class="input-field set w-input" maxlength="256" name="name-6" data-name="Name 6" placeholder="" id="name-6">&ndash;&gt;-->
<!--            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.PhoneNumber}}</p>-->
<!--          </div>-->
          <div class="email-wrapper">
            <label for="name-5">Address</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="" id="name-5">-->
            <p style="height: 100%;" class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.Address}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name-4">State</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.state1}}</p>

          </div>

          <div class="email-wrapper">
            <label for="name-4">City</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.City}}</p>

          </div>

          <div class="email-wrapper">
            <label for="name-7">Zip Code</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.Zip}}</p>
          </div>

          <div class="email-wrapper">
            <label for="name-7">Country</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">USA</p>
          </div>
          <div class="notice">
            <label for="name-7" class="field-label-2">NOTE:</label>
            <label for="name-7" class="field-label">You are unable to edit this profile because your account has been verified. If you feel that you need to edit, please reach out to the support team.</label>
          </div>
        </form>

        <form v-show="this.userData === 'account2'" id="email-form" name="email-form" data-name="Email Form" method="get">
          <div class="name-wrapper">
            <div class="left">
              <label for="name-2">First name</label>
              <!--                                <input type="text" class="input-field set w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">-->
              <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.FirstName2}}</p>
            </div>
            <div class="right">
              <label for="name-4">Last name</label>
              <!--                                <input type="text" class="input-field set w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3">-->
              <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.LastName2}}</p>
            </div>
          </div>
          <div class="email-wrapper">
            <label for="name">Email address</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.Email2}}</p>
          </div>
          <!--          <div class="email-wrapper">-->
          <!--            <label for="name-6">Phone number</label>-->
          <!--            &lt;!&ndash;                              <input type="text" class="input-field set w-input" maxlength="256" name="name-6" data-name="Name 6" placeholder="" id="name-6">&ndash;&gt;-->
          <!--            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.PhoneNumber}}</p>-->
          <!--          </div>-->
          <div class="email-wrapper">
            <label for="name-5">Address</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="" id="name-5">-->
            <p style="height: 100%;" class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.Address2}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name-4">State</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.state2}}</p>

          </div>
          <div class="email-wrapper">
            <label for="name-4">City</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.City2}}</p>

          </div>
          <div class="email-wrapper">
            <label for="name-7">Zip Code</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.Zip2}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name-7">Country</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">USA</p>
          </div>
          <div class="notice">
            <label for="name-7" class="field-label-2">NOTE:</label>
            <label for="name-7" class="field-label">You are unable to edit this profile because your account has been verified. If you feel that you need to edit, please reach out to the support team.</label>
          </div>
        </form>



        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {collection, getDocs,} from "firebase/firestore";
import {db} from "@/firebase/config";
// import {deleteDoc,getFirestore} from "@firebase/firestore";
// import Swal from "sweetalert2";
export default {
  name: "PersonalInfoCard",
  data(){
    return {
      contacts: [],
    }
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
  },

  async created() {
    const querySnapshot = await getDocs(collection(db, "dagbuelawrence@yopmail.com"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'FirstName': doc.data().FirstName,
        'FirstName2': doc.data().FirstName2,
        'LastName': doc.data().LastName,
        'LastName2': doc.data().LastName2,
        'Email': doc.data().Email,
        'Email2': doc.data().Email2,
        'Address': doc.data().Address,
        'Address2': doc.data().Address2,
        'City': doc.data().City,
        'City2': doc.data().City2,
        'Zip': doc.data().Zip,
        'Zip2': doc.data().Zip2,
        'AccountName1': doc.data().AccountName1,
        'AccountName2': doc.data().AccountName2,
        'Balance1': doc.data().Balance1,
        'Balance2': doc.data().Balance2,
        'IsPinSet': doc.data().IsPinSet,
        'AccountNumber1': doc.data().AccountNumber1,
        'AccountNumber2': doc.data().AccountNumber2,
        'AccountTier': doc.data().AccountTier,
        'AccountType': doc.data().AccountType,
        'DOB1': doc.data().DOB1,
        'DOB2': doc.data().DOB2,
        'SSN1': doc.data().SSN1,
        'SSN2': doc.data().SSN2,
        'state1': doc.data().state1,
        'state2': doc.data().state2,
      }
      this.contacts = data
    })
  },

  mounted() {

  },
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.header {
  margin-bottom: 1rem;
}

.name-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.left {
  width: 47%;
}

.right {
  width: 47%;
}

.input-field.set {
  margin-top: 0.5rem;
}

.email-wrapper {
  margin-top: 1rem;
}

.tabs {
  padding-bottom: 3rem;
}

.notice {
  margin-top: 1rem;
  padding: 14px;
  border-radius: 8px;
  background-color: #eaecf0;
}

.field-label {
  color: #475467;
  text-transform: lowercase;
}

.field-label-2 {
  color: #1a1d27;
}

.w-form {
  margin: 0 0 15px;
}
.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #dddddd;
}
.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
}
</style>