function cellClickListener(event) {
  const targetId = event.target.id.split("-");
  const caller = targetId[0];
  if (caller !== "cell") return;
  console.log(
    `call from cell ${targetId[1]}-${targetId[2]} with type ${targetId[3]}`
  );
}

export default cellClickListener;
