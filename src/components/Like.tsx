import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(true);
  const Toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color='red' size={40} onClick={Toggle} />;

  return <AiOutlineHeart size={40} onClick={Toggle} />;
};

export default Like;
