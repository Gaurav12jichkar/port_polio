import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
              <div className='contact_info_content'>
                <div className='contact_info_title'>
                  phone
                </div>
                <div className='contact_info_text'>
                  +91235678979864
                </div>
              </div>

            </div>
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <i class="zmdi zmdi-email material-icons-name"></i>
              <div className='contact_info_content'>
                <div className='contact_info_title'>
                  Email
                </div>
                <div className='contact_info_text'>
                  gauravjichkar12@gmail.com
                </div>
              </div>

            </div>
            <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <i class="zmdi zmdi-home material-icons-name"></i>
              <div className='contact_info_content'>
                <div className='contact_info_title'>
                  Address
                </div>
                <div className='contact_info_text'>
                  at.nagpur mahrashtra 441113
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* contact us from */}

      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 '>
              <div className='contact_form_container py-5'>
                <div className='contact_from_title'>
                  get in touch
                </div>
                <form id='contact_form'>
                  <div className='contact_drom_name d-flex justify-content-between align-items-between'>
                    <input type='text' id='contact_from_name' className='contact_from_name input_field' placeholder='Your Name' required='true' />
                    <input type='email' id='contact_from_email' className='contact_from_email input_field' placeholder='Your email' required='true' />
                    <input type='number' id='contact_from_phone' className='contact_from_phone input_field' placeholder='Your phone no' required='true' />

                  </div>


                  <div className='contact_from_text' mt-4>
                    <textarea className='text_field contact_form_message' placeholder='message' id='' cols="30" rows="10">

                    </textarea>
                  </div>
                  <div className='contact_form_button'>
                    <button type="submit" className='button_contact_button'>send message</button>

                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
