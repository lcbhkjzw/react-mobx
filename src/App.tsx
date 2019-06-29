import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';

import MyRouter from './router';
import AppState from './store';

interface AppProps {
  store: AppState
}

@observer
export default class App extends React.Component<AppProps, any> {
    store: AppState;

    constructor(props: AppProps) {
        super(props);
        this.store = this.props.store;
    }

    componentDidMount() {
        this.authenticate();

    }

    authenticate(e?: React.SyntheticEvent<HTMLElement>) {
        if (e) e.preventDefault();
    }

    click = () => {
      this.store.setData('fkdjfk')
    }
    render() {
        const { authenticated, authenticating } = this.store;

        return (
            <Router>
                <Provider store={this.store}>
                    <div className='wrapper'>

                        <div onClick={this.click}>点击</div>{authenticated}{ authenticating}
                        <MyRouter />
                        <footer>
                            Cobbled together by <a href='https://twitter.com/mhaagens' target='_blank'>
                                @mhaagens</a> | github: <a href='https://github.com/mhaagens' target='_blank'>mhaagens
                            </a>
                        </footer>
                    </div>
                </Provider>
            </Router>
        );
    }
}