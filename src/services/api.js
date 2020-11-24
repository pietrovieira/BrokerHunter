import axios from 'axios';

const api = axios.create({
  baseURL: 'http://homologacao.jaguarimobiliario.com.br',
  timeout: 1000,
  headers: {
    'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNvbXBhbnkiOiJCcm9rZXJIdW50ZXIiLCJvZmZpY2UiOiJGcm9udGVuZCBkZXZlbG9wZXIiLCJvYmplY3RpdmUiOiJTa2lsbCB0ZXN0In19.mn4yrrmXlrobiMSqVd8rlPQU_XI1F8uX-3YyG_Plmeo'}
});

export default api;

