import { useTheme } from './ThemeContext';

const Navbar = () =>{
    const { darkTheme, toggleTheme } = useTheme();
    return (
        <div className={`app ${darkTheme ? 'dark' : 'light'}`}>
        {/* Your component content */}
        <button onClick={toggleTheme} className='toggleBtn'>
          Toggle Theme: {darkTheme ? 'Dark' : 'Light'}
        </button>
        <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ab porro temporibus neque omnis dignissimos eveniet cupiditate iure nemo quo et aperiam quibusdam provident quia corrupti animi ullam, ea ratione?</p>
        
                </div>
      </div>
    );
  }


export default Navbar;
