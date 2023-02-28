import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import { signin } from "api";
import { User } from "types";

const SignIn = () => {
  const navigate = useNavigate();

  //nickname, id, pw 담는 useState
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  //리액트 쿼리 관련 코드
  const queryClient = useQueryClient();
  const { mutate } = useMutation(signin, {
    onSuccess: (response) => {
      //TODO: react-cookie
      console.log(response);
      queryClient.invalidateQueries("user");
      alert("로그인 성공!");
      navigate("/");
    },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.username.trim() === "" || user.password.trim() === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    mutate(user);
    setUser({ username: "", password: "" });
  };

  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={onSubmitHandler}>
        <div>
          <div>id</div>
        </div>
        <input
          type="text"
          onChange={onChangeHandler}
          name="username"
          value={user.username || ""}
        />
        <br />
        <div>
          <div>password</div>
        </div>
        <input
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={user.password || ""}
        />
        <br />
        <button>로그인</button>
      </form>

      <div>
        <div>
          회원이 아니신가요?
          <Link to={"/signup"}>회원가입</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
