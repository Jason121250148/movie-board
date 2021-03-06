import { createAction } from 'redux-actions';

import movieApi from '../../db/api/movie';

export default {
  loadInTheaters: createAction('LOAD_IN_THEATERS', movieApi.inTheaters),
  loadComingSoon: createAction('LOAD_COMING_SOON', movieApi.comingSoon),
  loadTop250: createAction('LOAD_TOP_250', movieApi.top250),
  loadMovie: createAction('LOAD_MOVIE', movieId => movieApi.movie(null, `/${movieId}`))
};
