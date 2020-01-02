/* eslint-disable no-param-reassign */
/**
 * =============================================================================
 * Lista de Recursos
 * =============================================================================
 *
 * 00. Auth
 * 01. Eventos
 * 02. Doadora
 * 03. Perfil (Estado) para Doadoras
 * 04. Estado (Entrada) de Doadoras
 * 05. Estágio (Etapa) de Doadoras
 * 06. Ciclos Casados
 * 07. Banco de Óvulos
 * 08. Registro de Ultrasom
 * 09. Receptoras
 * 10. Unidades de Atendimento
 * 11. Preço
 * 12. Consultas
 * 13. Histórico
 * 14. Etnias
 * 15. Coletas
 * 16. Despache
 * 17. Gastos
 * 18. Exames
 */

import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://huntington-api.herokuapp.com',
    });
  }

  setToken = (token) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  removeToken = () => {
    delete this.api.defaults.headers.common.Authorization;
  }

  // ===========================================================================
  // 00. Auth
  // ===========================================================================

  login = (data) => this.api.post('/auth/local', data)

  signInWithToken = (data) => this.api.post('/auth/access-token', data)

  // ===========================================================================
  // 01. Eventos
  // ===========================================================================

  countEvent = (params) => this.api.get('events/count', { params });

  eventAddDonor = (id, donor_id) => this.api.put(`events/add/${id}`, { id: donor_id });

  getEvents = (params) => this.api.get('events', { params });

  getEvent = (id, params) => this.api.get(`events/${id}`, { params });

  createEvent = (data) => this.api.post('events', data);

  updateEvent = (data, id) => this.api.put(`events/${id}`, data);

  deleteEvent = (id) => this.api.delete(`events/${id}`);

  // ===========================================================================
  // 02. Doadora
  // ===========================================================================

  countDoadora = (params) => this.api.get('donor/count', { params });

  getDoadoras = (params) => this.api.get('donor', { params });

  getDoadora = (params, id) => this.api.get(`donor/${id}`, { params });

  createDoadora = (data) => this.api.post('donor', data);

  updateDoadora = (data, id) => this.api.put(`donor/${id}`, data);

  deleteDoadora = (id) => this.api.delete(`donor/${id}`);

  // ===========================================================================
  // 03. Perfil (Estado) para Doadoras
  // ===========================================================================

  countProfile = (params) => this.api.get('profiles/count', { params });

  getProfiles = (params) => this.api.get('profiles', { params });

  getProfile = (params, id) => this.api.get(`profiles/${id}`, { params });

  createProfile = (data) => this.api.post('profiles', data);

  updateProfile = (data, id) => this.api.put(`profiles/${id}`, data);

  deleteProfile = (id) => this.api.delete(`profiles/${id}`);

  // ===========================================================================
  // 04. Estado (Entrada) de Doadoras
  // ===========================================================================

  countState = (params) => this.api.get('statuses/count', { params });

  getStates = (params) => this.api.get('statuses', { params });

  getState = (id, params) => this.api.get(`statuses/${id}`, { params });

  createState = (data) => this.api.post('statuses', data);

  updateState = (id, data) => this.api.put(`statuses/${id}`, data);

  deleteState = (id) => this.api.delete(`statuses/${id}`);

  // ===========================================================================
  // 05. Estágio (Etapa) de Doadoras
  // ===========================================================================

  countStage = (params) => this.api.get('stagings/count', { params });

  getStatges = (params) => this.api.get('stagings', { params });

  getStage = (params, id) => this.api.get(`stagings/${id}`, { params });

  createStage = (data) => this.api.post('stagings', data);

  updateStage = (data, id) => this.api.put(`stagings/${id}`, data);

  deleteStage = (id) => this.api.delete(`stagings/${id}`);

  // ===========================================================================
  // 06. Ciclos Casados
  // ===========================================================================

  countBondCicle = (params) => this.api.get('bondcicles/count', { params });

  getBondCicles = (params) => this.api.get('bondcicles', { params });

  getBondCicle = (params, id) => this.api.get(`bondcicles/${id}`, { params });

  createBondCicle = (data) => this.api.post('bondcicles', data);

  updateBondCicle = (data, id) => this.api.put(`bondcicles/${id}`, data);

  deleteBondCicle = (id) => this.api.delete(`bondcicles/${id}`);

  // ===========================================================================
  // 07. Banco de Óvulos
  // ===========================================================================

  countOvulebank = (params) => this.api.get('ovulebanks/count', { params });

  getOvulebanks = (params) => this.api.get('ovulebanks', { params });

  getOvulebank = (params, id) => this.api.get(`ovulebanks/${id}`, { params });

  createOvulebank = (data) => this.api.post('ovulebanks', data);

  updateOvulebank = (data, id) => this.api.put(`ovulebanks/${id}`, data);

  deleteOvulebank = (id) => this.api.delete(`ovulebanks/${id}`);

  // ===========================================================================
  // 08. Registro de Ultrasom
  // ===========================================================================

  countUltrasound = (params) => this.api.get('ultrasound/count', { params });

  getUltrasounds = (params) => this.api.get('ultrasound', { params });

  getUltrasound = (params, id) => this.api.get(`ultrasound/${id}`, { params });

  createUltrasound = (data) => this.api.post('ultrasound', data);

  updateUltrasound = (data, id) => this.api.put(`ultrasound/${id}`, data);

  deleteUltrasound = (id) => this.api.delete(`ultrasound/${id}`);

  // ===========================================================================
  // 09. Receptoras
  // ===========================================================================

  countReceiver = (params) => this.api.get('receivers/count', { params });

  getReceivers = (params) => this.api.get('receivers', { params });

  getReceiver = (params, id) => this.api.get(`receivers/${id}`, { params });

  createReceiver = (data) => this.api.post('receivers', data);

  updateReceiver = (data, id) => this.api.put(`receivers/${id}`, data);

  deleteReceiver = (id) => this.api.delete(`receivers/${id}`);

  // ===========================================================================
  // 10. Unidades de Atendimento
  // ===========================================================================

  countUnit = (params) => this.api.get('units/count', { params });

  getUnits = (params) => this.api.get('units', { params });

  getUnit = (params, id) => this.api.get(`units/${id}`, { params });

  createUnit = (data) => this.api.post('units', data);

  updateUnit = (data, id) => this.api.put(`units/${id}`, data);

  deleteUnit = (id) => this.api.delete(`units/${id}`);

  // ===========================================================================
  // 11. Preço
  // ===========================================================================

  countPricing = (params) => this.api.get('pricings/count', { params });

  getPricings = (params) => this.api.get('pricings', { params });

  getPricing = (params, id) => this.api.get(`pricings/${id}`, { params });

  createPricing = (data) => this.api.post('pricings', data);

  updatePricing = (data, id) => this.api.put(`pricings/${id}`, data);

  deletePricing = (id) => this.api.delete(`pricings/${id}`);

  // ===========================================================================
  // 12. Consultas
  // ===========================================================================

  countConsultation = (params) => this.api.get('consultation/count', { params });

  getConsultations = (params) => this.api.get('consultation', { params });

  getConsultation = (params, id) => this.api.get(`consultation/${id}`, { params });

  createConsultation = (data) => this.api.post('consultation', data);

  updateConsultation = (data, id) => this.api.put(`consultation/${id}`, data);

  deleteConsultation = (id) => this.api.delete(`consultation/${id}`);

  // ===========================================================================
  // 13. Histórico
  // ===========================================================================

  countHistory = (params) => this.api.get('history/count', { params });

  getHistories = (params) => this.api.get('history', { params });

  getHistory = (params, id) => this.api.get(`history/${id}`, { params });

  // ===========================================================================
  // 14. Etnias
  // ===========================================================================

  countEtnia = (params) => this.api.get('etnias/count', { params });

  getEtnias = (params) => this.api.get('etnias', { params });

  getEtnia = (params, id) => this.api.get(`etnias/${id}`, { params });

  createEtnia = (data) => this.api.post('etnias', data);

  updateEtnia = (data, id) => this.api.put(`etnias/${id}`, data);

  deleteEtnia = (id) => this.api.delete(`etnias/${id}`);

  // ===========================================================================
  // 15. Coletas
  // ===========================================================================

  countCollecting = (params) => this.api.get('collecting/count', { params });

  getCollectings = (params) => this.api.get('collecting', { params });

  getCollecting = (params, id) => this.api.get(`collecting/${id}`, { params });

  createCollecting = (data) => this.api.post('collecting', data);

  updateCollecting = (data, id) => this.api.put(`collecting/${id}`, data);

  deleteCollecting = (id) => this.api.delete(`collecting/${id}`);

  // ===========================================================================
  // 16. Despache
  // ===========================================================================

  countDispatch = (params) => this.api.get('dispatches/count', { params });

  getDispatches = (params) => this.api.get('dispatches', { params });

  getDispatch = (params, id) => this.api.get(`dispatches/${id}`, { params });

  createDispatch = (data) => this.api.post('dispatches', data);

  updateDispatch = (data, id) => this.api.put(`dispatches/${id}`, data);

  deleteDispatch = (id) => this.api.delete(`dispatches/${id}`);

  // ===========================================================================
  // 17. Gastos
  // ===========================================================================

  countExpense = (params) => this.api.get('expenses/count', { params });

  getExpenses = (params) => this.api.get('expenses', { params });

  getExpense = (params, id) => this.api.get(`expenses/${id}`, { params });

  createExpense = (data) => this.api.post('expenses', data);

  updateExpense = (data, id) => this.api.put(`expenses/${id}`, data);

  deleteExpense = (id) => this.api.delete(`expenses/${id}`);

  // ===========================================================================
  // 18. Exames
  // ===========================================================================

  countExam = (params) => this.api.get('expenses/count', { params });

  getExams = (params) => this.api.get('expenses', { params });

  getExam = (params, id) => this.api.get(`expenses/${id}`, { params });

  createExam = (data) => this.api.post('expenses', data);

  updateExam = (data, id) => this.api.put(`expenses/${id}`, data);

  deleteExam = (id) => this.api.delete(`expenses/${id}`);
}

export default new ApiService();
