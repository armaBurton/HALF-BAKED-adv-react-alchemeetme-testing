import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import App from '../../App';


const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('Home', () => {
  it('should poop it\'s pants', () => {
    // test to see if test is running
    console.log('poop your pants');
  })

  it('should render the user profile', async () => {

    render(
      <MemoryRouter>
        <Home user={user} />
      </MemoryRouter>
    )

    screen.getByText(/Vonta/i);

    screen.getByText(/res non verba/i);

    waitFor(() => {
      const heading = screen.getByRole('heading');
      expect(heading.textContent).toBe(/interests/i);
    })

    // const avatar = screen.getByAltText(/avatar/i);
    const avatar = screen.getByRole('img', {name: /avatar/i});
    expect(avatar.src).toEqual('https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif');

    const header = screen.getByRole('img', {name: /header/i});
    expect(header.src).toEqual('https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png');

    const likeArr = [];
    const userLikes = screen.getAllByRole('listitem');
    userLikes.map(like => {
      return likeArr.push(like.textContent)
    });
    expect(likeArr).toEqual([
      'React',
      'Anime',
      'Traveling',
      'Living',
      'Tower Defense Games',
      'Card Games'
    ]);
  })
})
