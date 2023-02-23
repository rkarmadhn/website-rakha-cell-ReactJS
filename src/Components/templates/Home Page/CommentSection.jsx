import React from "react";
import FormComment from "../../UI/organisms/FormComment/FormComment";
import Containers from '../../UI/Atoms/Containers/Containers'

export default function CommentSection() {
  return (
    <Containers className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center py-8">
      <FormComment />
    </Containers>
  );
}
