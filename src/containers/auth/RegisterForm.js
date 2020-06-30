import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import SettingForm from '../../components/setting/SettingForm';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/user';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;

      dispatch(
        changeField({
          form: 'register',
          key: name,
          value,
        })
      );
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { oldPassword, newPassword, newConfirm } = form;
      if ([oldPassword, newPassword, newConfirm].includes('')) {
        setError('빈 칸을 모두 입력하세요.');

        return;
      }
      if (newPassword !== newConfirm) {
        setError('비밀번호가 일치하지 않습니다.');

        dispatch(initializeForm('register'));

        return;
      }

      const { username } = user;

      dispatch(register({ username, oldPassword, newPassword }));
    },
    [dispatch, form, user]
  );

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 401) {
        setError('비밀번호 오류');

        return;
      }

      setError('비밀번호 변경 실패');
      return;
    }
    if (
      form.oldPassword !== '' &&
      form.newPassword !== '' &&
      form.newConfirm !== '' &&
      auth
    ) {
      dispatch(logout());
    }
  }, [auth, authError, dispatch, form]);

  return (
    <SettingForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterForm);
