import { AddOrEditArticle } from "../../../components/addOrEditArticle";
import { useMutation, useQuery } from "react-query";
import React from "react";
import { putEditArticle, getArticle } from "../api/crud";
import { Loading } from "../../../components/loading";
import PropTypes from "prop-types";
import { AddArticleContainer } from "../addArticle";

export const EditArticleContainer = ({ articleId, openArtEdit, handleCloseEditArt}) => {

  const { isFetching, refetch, data, isFetched } = useQuery(`article${articleId}`, () => getArticle(articleId));
  const article = data?.data;

  const { mutate } = useMutation( 'editArticle', (data) => putEditArticle(data));

  const editArticle = (values) => {
    mutate(values);
    handleCloseEditArt();
  };

  return (
    <>
      {isFetching && <Loading/>}
      {isFetched && <AddOrEditArticle open={openArtEdit} handleClose={handleCloseEditArt} submitArticle={editArticle} article={article}/>}
    </>
  );
};

EditArticleContainer.propTypes = {
  articleId: PropTypes.number.isRequired,
  openArtEdit: PropTypes.bool.isRequired,
  handleCloseEditArt: PropTypes.func.isRequired
}