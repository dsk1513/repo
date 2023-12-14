// mailchimpService.js

import axios from 'axios';

const API_KEY = 'a7971d3409e3883ac96f507a109fe16f-us21';
const AUDIENCE_ID = '5dce77e310';

const mailchimpBaseUrl = `https://<dc>.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}`;

const headers = {
  Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
  'Content-Type': 'application/json',
};

export const subscribeUser = async (email) => {
  try {
    const response = await axios.post(
      `${mailchimpBaseUrl}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Mailchimp subscription error:', error.response.data);
    throw error;
  }
};
