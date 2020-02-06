import React, { useState } from 'react';

import { Container, Scroll, Thumb } from './styles';
import Botao from '~/components/Botao';
import { primary } from '~/styles/colors';

function Termos({ onNext }) {
  const [top, setTop] = useState(0);

  const handleUpdateScroll = ({ top }) => {
    setTop(top);
  };

  return (
    <Container>
      <img src="/img/logo-dark.svg" />
      <h2>Questionário</h2>
      <h4>Ovodoação/Embriodoação</h4>
      <div className="scroll">
        <Scroll
          handleUpdate={handleUpdateScroll}
          renderThumbVertical={(props) => <Thumb {...props} />}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet augue ex, a sodales diam aliquam a. Mauris a mi vitae orci consectetur blandit et at mauris. Vestibulum a felis eget lectus scelerisque congue eget eget nulla. Pellentesque accumsan aliquet metus et venenatis. Nulla consectetur et ex nec mattis. Etiam quis finibus tellus. Sed eget tortor ut nunc tempor laoreet vitae vel ex. Ut sodales metus dolor, vitae consectetur tellus porta nec. Donec sit amet justo euismod, accumsan massa nec, interdum purus.
          </p>
          <p>
            Nulla ipsum ipsum, porta eu justo euismod, volutpat feugiat ante. Curabitur congue mi non sapien tristique malesuada. Sed eget enim suscipit, porttitor dui a, blandit ex. Suspendisse aliquet, sem eu venenatis faucibus, felis nisi maximus sem, a finibus libero enim non enim. Integer mollis, orci sed eleifend tempor, nisl justo pharetra sem, eu pulvinar nulla ex et metus. Sed odio purus, viverra ac eleifend ac, egestas vitae libero. Nam at sem nec metus dapibus interdum sit amet a ante. Quisque eget ante ante. Praesent porttitor laoreet odio, sed placerat metus ultrices in.
          </p>
          <p>
            Vivamus at massa augue. Vivamus ipsum magna, mattis vitae ipsum in, dignissim semper ipsum. Proin non volutpat ipsum. Suspendisse hendrerit, lectus ac facilisis imperdiet, arcu dolor condimentum erat, in volutpat lectus ligula non turpis. Aliquam suscipit sem consectetur commodo venenatis. Sed feugiat, lacus sit amet fermentum elementum, dolor odio pulvinar risus, eu elementum magna nulla vitae nulla. Ut pretium elit urna, eget aliquet felis cursus quis. Nullam et metus ut lectus consequat consequat non ac risus. Suspendisse in justo eget ligula dictum convallis non nec turpis. Nunc feugiat efficitur blandit. Pellentesque dictum justo sed nisi mattis egestas. Vestibulum sodales velit ac dui venenatis ullamcorper. Cras feugiat maximus pulvinar.
          </p>
          <p>
            Vestibulum consectetur consequat quam non rhoncus. Etiam venenatis, ligula nec vehicula varius, elit purus tempor ligula, non imperdiet urna eros id nulla. Sed nulla tellus, suscipit eu pretium ut, bibendum laoreet nunc. Sed tempus facilisis auctor. Cras sodales velit faucibus elementum efficitur. Mauris porta ultrices augue id ullamcorper. Mauris placerat felis a bibendum dictum. Sed placerat magna ac neque dapibus, id ornare dui gravida.
          </p>
          <p>
            Sed bibendum venenatis enim non volutpat. Nunc tincidunt, risus in fermentum luctus, ante velit facilisis dolor, eu posuere neque leo eget nunc. Cras non mi augue. Donec tempor vehicula purus, eget ullamcorper tortor. Ut sit amet arcu eu sapien sodales condimentum. Cras ac lobortis velit. Aliquam erat volutpat. Nullam eget orci dui. Nullam auctor turpis est, non dictum augue sodales sit amet. Suspendisse sit amet augue nec neque eleifend blandit.
          </p>
        </Scroll>
        <div className="overlay" />
      </div>
      <Botao endIcon="arrow-right" onClick={onNext}>Próximo</Botao>
      <div className="separator" />
      <p className="disclaimer">Este questionário é uma exigência do Ministério da Saúde através da regulamentação federal RDC nº33, art.20 da ANVISA, de maio de 2011</p>

    </Container>
);
}

export default Termos;
