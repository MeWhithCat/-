// jest.config.ts
import type { Config } from 'jest'

const config: Config = {
  bail: 0, // 有测试错误后就停止错误
  // 多于一个测试文件运行时不展示每个测试用例测试通过情况
  verbose: true,
  // 测试用例运行在一个类似于浏览器的环境里，可以调用浏览器的 API
  testEnvironment: 'jsdom',
  // 转译下列模块为 Jest 能识别的代码
  preset: 'ts-jest',
  moduleNameMapper: {
    // 模块alias  例如我们在测试文件中导入文件 import xxx from '@/components/xxx' 其中 '@/components/xxx' 会对应到<rootDir/src/components/xxx 模块。
    '^@/(.*)$': '<rootDir>/src/$1',
    // identity-obj-proxy 会mock 样式相关的
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  // 以 <rootDir>/src 这个目录做为根目录来搜索测试文件（模块）
  roots: ['<rootDir>'],

  // 在测试环境准备好之后执行前的钩子函数，每个测试文件执行之前运行下述文件, 一些环境的兼容的代码我们可以写在这里
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
}

export default config