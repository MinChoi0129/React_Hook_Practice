import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>

      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
