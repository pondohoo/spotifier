import React from 'react'
import { loginEndpoint } from '../Credentials'

export default function Login() {
  return (
    <div className="bg-green-500 rounded-full px-20 py-4 mt-20 ">
      <a href={loginEndpoint}>
        <div className="font-gotham">LOGIN</div>
      </a>
    </div>
  );
}
