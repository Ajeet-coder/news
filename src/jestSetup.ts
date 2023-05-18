import '@testing-library/jest-dom'
//import { fetch, Headers, Request, Response } from 'cross-fetch'
  import { rest } from 'msw'
 import { setupServer } from 'msw/node'
import { loginDummyData } from './Test/MockDummyData'
// import dummyPokemon from 'src/tests/dummyPokemon'

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response

export const handlers = [
  rest.get('http://localhost:8000/auth/login', (_req, res, ctx) => {
    localStorage.setItem('is-authenticated', 'true')

    
    return res(ctx.json(loginDummyData))
  }),
]

export const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())
