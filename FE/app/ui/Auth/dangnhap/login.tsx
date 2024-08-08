'use client'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link'
import { Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { LoginRequest } from "@type/taikhoan/auth.request"
import auth from "@service/AuthService"
import account from "@service/AccountService"
import { notification } from "antd"
import { ErrorResponse } from "@type/master"
import { Token } from "@type/taikhoan"
import { tokenAtom, userAtom } from "@storage"
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useAtomValue } from "jotai"


const Login = () => {



  const token = useAtomValue(tokenAtom)
  const setUser = useSetAtom(userAtom)
  const setToken = useSetAtom(tokenAtom)
  const router = useRouter()

  const onFinishFailed: FormProps<LoginRequest>['onFinishFailed'] = async (errorInfo) => {
    if (token) {
      const data = await auth.Refresh(token)
      notification.warning({ message: JSON.stringify(data), placement: "bottomRight" })
    }
  };

  const onFinish = async (values: LoginRequest) => {
    try {
      const data = await auth.Login(values) as Token
      setToken(data.access_token)

      const info = await account.GetMe(data.access_token)
      setUser(info)

      notification.success({ message: "Login Success", placement: "bottomRight" })
      router.push("/tintuc")
    } catch (error) {
      // console.log("Throw Error Login" , error)
      const err = error as ErrorResponse
      // notification.error({message : JSON.stringify(err.message) , placement : "bottomRight"} )
      notification.error({ message: err.message, placement: "bottomRight" })
    }
  };
  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <div className="flex items-center justify-center dark:text-dark-text dark:border-dark">
        <div className="p-10 rounded-lg shadow-lg text-center w-1/2 bg-white dark:bg-dark-secondary">
          <h1 className="text-3xl mb-8 font-bold">Đăng Nhập</h1>
          <div className="text-left mb-6">

            <label className="block mb-1 font-semibold">Email</label>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui Lòng Nhập Email' }]}
            >
              <Input
                prefix={<MailOutlined width={17} height={12} className='left-2 w-full' />} />
            </Form.Item>
          </div>
          <div className="text-left mb-6">
            <label className="block mb-1 font-semibold">Mật Khẩu</label>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui Lòng Nhập Mật Khẩu' }]}
            >
              <Input.Password
                prefix={<LockOutlined width={17} height={12} className='left-2' />} />
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          <div className='my-3'>
            <Link href='/quenmatkhau' className="text-center text-sm text-gray-500 cursor-pointer my-6 hover:underline">
              Quên mật khẩu
            </Link>
          </div>
          <div className='flex justify-center w-full'>
            <Link href="/dangky">
              <Button type='primary' >
                Tạo tài khoản
              </Button>
            </Link>
          </div>
        </div>
      </div >
    </Form>
  );
};

export default Login;
