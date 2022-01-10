import React, {
  useState,
  ChangeEvent,
  FormEvent,
  FC,
  useReducer,
  useEffect,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

interface Props {
  onLogin: (email: string, password: string) => void;
}

const emailReducer = (
  state: { value: string },
  action: { type: string; value?: string }
): { value: string; isValid: boolean | null } => {
  if (action.type === 'USER_INPUT' && action.value !== undefined) {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (
  state: { value: string },
  action: { type: string; value?: string }
): { value: string; isValid: boolean | null } => {
  if (action.type === 'USER_INPUT' && action.value !== undefined) {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login: FC<Props> = (props) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        (emailState.isValid ?? false) && (passwordState.isValid ?? false)
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
