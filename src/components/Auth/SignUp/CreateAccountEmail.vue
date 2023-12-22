<template>
  <div class="alpha">

    <div class="image" @click="home">
      <img src="@/assets/companylogo.png" alt="inter-switch-logo"  class="logo">
    </div>

    <div class="text-area">
      <h2>Create Account</h2>
      <p>Welcome Please enter your details.</p>
    </div>

    <div class="form-alpha">
      <form @submit.prevent="initiateEnrollment">

        <div class="input-form-2">
          <!--          <label>Full name</label>-->
          <input type="text"  placeholder="Full name" class="input-form-1" required="required"/>
          <!--          <input type="text"  placeholder="Last name"   class="input-form" required="required"/>-->
        </div>

        <div class="input-form-2">
          <!--          <label>Email address</label>-->
          <input type="email"  placeholder="Email address"  class="input-form-1" required="required"/>
        </div>

        <div  class="input-form-2">
          <!--          <label>Phone number</label>-->
          <input type="number"  placeholder="Phone number"  class="input-form-1" required="required"/>
        </div>

        <div class="has-addons">
          <!--          <label>Create Passcode</label>-->
          <input @input="validatePassword" v-if="showPassword" v-model="userPassword"   type="text" class="input-form-1 password"   placeholder="Create Passcode" />
          <input @input="validatePassword" v-else type="password" v-model="userPassword"  class="input-form-1  password"  placeholder="Create Passcode"   >
          <div class="space" @click="toggleShow">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" ></i>
          </div>
        </div>

        <div v-if="passwordErrors.length" class="error-messages">
          <ul>
            <li v-for="error in passwordErrors" :key="error">{{ error }}</li>
          </ul>
        </div>

        <div class="has-addons">
          <!--          <label>Confirm Passcode</label>-->
          <input @input="validatePassword" v-if="showPassword2"  type="text" class="input-form-1 password"   placeholder="Confirm password"   />
          <input @input="validatePassword" v-else type="password"   class="input-form-1  password"   placeholder="Confirm password"   >
          <div class="space" @click="toggleShow2">
            <i class="fas" :class="{ 'fa-eye-slash': showPassword2, 'fa-eye': !showPassword2 }" ></i>
          </div>
        </div>

        <div class="input-form-2">
          <select
              class="input-form-3"
              aria-required="required"
              data-name="Field"
              placeholder="Select Country"
              aria-placeholder="Select Country"
          >
            <option selected disabled value="">Choose Country</option>
            <option :value="null" disabled>Select Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote d&#039;Ivoire">Cote d&#039;Ivoire</option>
            <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="France Metropolitan">France Metropolitan</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People&#039;s Republic of">Korea, Democratic People&#039;s Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao, People&#039;s Democratic Republic">Lao, People&#039;s Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="St. Helena">St. Helena</option>
            <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan, Province of China">Taiwan, Province of China</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Virgin Islands (British)">Virgin Islands (British)</option>
            <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
            <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Yugoslavia">Yugoslavia</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>

        <div class="checkbox-part">
          <input type="checkbox"  class="checkbox" required="required"/>
          <p class="checkbox-text">By signing up, you agree to the Terms of Service<br/>
            and Data Processing Agreement.</p>
        </div>

        <div class="submit">
          <button class="button max-width-full w-button">Create account</button>
        </div>

      </form>
    </div>

    <div class="last-text">
      <p>Already have an account? <span @click="logIn">Login</span></p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CreateAccountEmail",
  data(){
    return {
      showPassword: false,
      showPassword2: false,
      country: "",
      userPassword: "",
      passwordErrors: [],
    }
  },
  methods:{
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },



    initiateEnrollment(event){
      this.validatePassword();
      if (this.passwordErrors.length > 0) {
        event.preventDefault(); // Prevent form submission
        // eslint-disable-next-line no-undef
        swal('Error', 'Please fix the errors with the password before submitting again.', 'error')
      } else {
        // StoreUtils.dispatch(StoreUtils.actions.auth.initiateEnrollment, this.model)
        // StoreUtils.commit(StoreUtils.mutations.auth.updateSignUpFormData, {
        //   userEmail: this.model.userEmail,
        //   userFullName: this.model.userFullName,
        //   userPassword: this.model.userPassword,
        // })
        this.$router.push("/signUpDetails");
        window.scrollTo(0, 0);
      }
    },

    logIn(){
      this.$router.push("/loginWithEmail");
      window.scrollTo(0, 0);
    },

    validatePassword() {
      this.passwordErrors = [];
      if (this.userPassword  === '') {
        this.passwordErrors.push("Password is required.");
      }
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!&])[A-Za-z\d@$!&]{8,15}$/.test(this.userPassword)) {
        this.passwordErrors.push("Password must meet the following criteria:");
        this.passwordErrors.push("- It should be alphanumeric.");
        this.passwordErrors.push("- The first letter should be capitalized.");
        this.passwordErrors.push("- It must contain a special character (@, $, !, & etc).");
        this.passwordErrors.push("- It should be at least 8 characters long.");
      }
    },

    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },

  },
  computed:{
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    },
    buttonLabel2() {
      return (this.showPassword2) ? "Hide" : "Show";
    }
  }
}
</script>

<style scoped>
.alpha{
  margin-top: 2%;
}

.logo{
  width: 13.5%;
  margin-top: 1%;
}

.text-area h2{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #222222;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
}

.text-area p{
  width: 38%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #667085;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

.text-area{
  /*margin-bottom: 0.3%;*/
}

.form-alpha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.image{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.input-form-2{
  margin-top: 7%;
  display: block;
  /*justify-content: center;*/
}

.input-form{
  margin-right: 15px;
  margin-left: 15px;
  padding-left: 15px;
}

.input-form-1{
  order: 1;
  width: 100%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
}

.input-form-3{
  order: 1;
  width: 100%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
}

select{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}

select:focus {
  border: 1px solid #0f2e6d;
}

option{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}


input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}

input:focus {
  border: 1px solid #0f2e6d;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


button{
  background-color: transparent;
}

.checkbox-part{
  display: flex;
  justify-content: center;
  margin-top: 3.5%;
  margin-bottom: 3.5%;
}
.checkbox{
  margin-right: 10px;
}
.checkbox-text{
  font-size: 14px;
  color: #667085;
  padding-top: 1%;
  padding-bottom: 1%;
}

.submit{
  margin-top: 2%;
}


.last-text{
  margin-top: 1.5%;
  text-align: center;
  color: #667085;
}

span{
  color: #0f2e6d;
}

span:hover{
  text-decoration: underline;
}


.has-addons{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 7%;
}

button{
  background-color: transparent;
}

.fas{
  font-size: 13px;
  margin-top: 10%;
}

.space{
  padding-top: 10px;
  padding-bottom: 11px;
  padding-right: 10px;
  border: 1px solid #d0d5dd;
  border-left-style: none;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
}


.input-form-1.password {
  border-right-style: none;
  border-radius: 8px 0 0 8px;
}

select{
  color: #222222;
}

option{
  color: #222222;
}

option::placeholder{
  color: #222222;
}

select::placeholder{
  color: #222222;
}

.error-messages {
  color: #db657b;
  font-size: 11.5px;
  text-decoration: none;
  list-style: none;
  padding-top: 20px;
}

.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #0f2e6d;
  border: #0f2e6d;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
input.w-button {
  -webkit-appearance: button;
}

.max-width-full {
  position: static;
  top: 89%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: none;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 45px;
  padding: 5px 1rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 6px;
  background-color: #0f2e6d;
  color: #fff;
  letter-spacing: 0.4px;
  text-align: center;
  transition: 0.3s;
}

.button:hover{
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.7);
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    margin-top: 5%;
  }

  .logo{
    width: 38%;
  }

  .space{
    padding-top: 9.5px;
    padding-bottom: 9.5px;
  }
}

@media (max-width: 500px) {

  .logo{
    width: 55%;
  }

  .alpha{
    margin-top: 5%;
  }

}
</style>