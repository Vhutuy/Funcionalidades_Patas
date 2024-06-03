function submitEvaluation() {
  const rating = document.querySelector('input[name="rating"]:checked').value;
  const evaluation = document.getElementById('evaluation').value;

  console.log({ rating, evaluation });

  alert('Avaliação enviada com sucesso!');
}