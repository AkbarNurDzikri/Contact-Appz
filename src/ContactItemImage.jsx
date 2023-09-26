import React from 'react';

function ContactItemImage({imageUrl}) {
  return (
    <div className="contact-item_image">
      <img src={imageUrl} alt="Contact Avatar" />
    </div>
  )
}

export default ContactItemImage;