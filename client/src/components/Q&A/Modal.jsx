import React from 'react';

const Modal = ( { product, handleClose, AnswerBoolean, question } ) => {
  const currentProduct = useSelector(state => state.product);
  const title = AnswerBoolean ? 'Submit your Answer' : 'Ask Your Question';
  const subTitle = AnswerBoolean ? `${product.name}: ${question.body}` : `About the ${product.name}`;

  return (
    <div className="modal">
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      {AnswerBoolean ? (
        <form>

        </form>
      ) : (
        <form>

        </form>
      )}
    </div>
  )
}