import { render, waitFor, screen, wait } from "@testing-library/react";
import App from './App'

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
})

test('receives GitHub name from GitHub REST API using jest fetch mock', async() => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Brenton Ring'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', {level: 2}))
    expect(gitHubName).toHaveTextContent('Brenton Ring')
});

test('receives GitHub URL from GitHub REST API using jest fetch mock', async() => {
    fetch.mockResponseOnce(JSON.stringify({url: 'https://github.com/brentonring'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
});