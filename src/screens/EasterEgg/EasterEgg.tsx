import { TypeAnimation } from 'react-type-animation'

import { ContentYoda } from './style'

export function Yoda() {
  return (
    <ContentYoda>
      <TypeAnimation
        sequence={[
          'you',
          1000,
          'find',
          2000,
          'us',
          () => {
            console.log('Done typing!')
          },
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
      <img src="" alt="" />
      <h2>contratar-nos você deve</h2>
    </ContentYoda>
  )
}
