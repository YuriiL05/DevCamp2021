import { apiClient } from '../../../config/axios';
import { serialize } from 'object-to-formdata';

export const getArticles = async ( params ) => {
  return apiClient.get('/articles', { params });
}

export const getArticle = async ( articleId ) => {
  return apiClient.get(`/articles/${articleId}`);
}

export const getAccessLevels = async () => {
  return apiClient.get('/accessLevels');
}

export const postAddArticle = async (data) => {
  const formData = serialize(data, { indices: true });

  return apiClient.post(`/articles`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const putEditArticle = async (data) => {
  const formData = serialize(data, { indices: true });

  return apiClient.put(`/articles/${data.ArticleID}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getLikesForArticle = async (articleId) => {
  return apiClient.get(`/likes/article/${articleId}`)
}

export const addLike = async (ArticleID) => {
  return apiClient.post(`/likes/article/${ArticleID}`)
}

export const removeLikeByArticleId = async (ArticleID) => {
  return apiClient.delete(`/likes/article/${ArticleID}/user`)
}

export const getCommentsForArticle = async (articleId) => {
  return apiClient.get(`/comments/article/${articleId}`)
}

export const createNewComment = async (data) => {
  return apiClient.post(`/comments/`, data)
}
