import React, { Component, lazy, Suspense } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Menu } from 'antd';
import LazyLoading from "./components/懒加载";
import Page404 from './components/Page404';
import ErrorBoundary from "./components/错误边界";

const { SubMenu } = Menu;

const routes = [
  {
    id: "1",
    title: "基础使用",
    children: [
      {
        id: "1-1",
        title: "Fragments",
        to: '/',
        path: '/',
        component: lazy(()=> import("./components/Fragments"))
      },
      {
        id: "1-2",
        title: "错误边界demo",
        to: '/errorDemo',
        path: '/errorDemo',
        component: lazy(()=> import("./components/错误边界demo"))
      },
      {
        id: "1-3",
        title: "context",
        to: '/context',
        path: '/context',
        component: lazy(()=> import("./components/context/Parent"))
      },
    ],
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: ["1"],
      defaultSelectedKeys: ["1-1"],
      nowPath: '',
      nowComponent: null,
    }
  }
  onOpenChange = (openKeys)=> {
    this.setState(state=>({
      openKeys
    }))
  }

  render() { 
    return (
      <div className="App">
        <div className="leftNav">
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            defaultSelectedKeys={ this.state.defaultSelectedKeys }
            onOpenChange={this.onOpenChange}
            style={{ width: 256 }}
          >
            {
              routes.map(item=>{
                return (
                  <SubMenu
                    key={ item.id }
                    title={ <span>{ item.title }</span> }
                  >
                    { item.children.map(item2=> {
                      return (
                        <Menu.Item key={ item2.id }>
                          <Link to={ item2.to }>{ item2.title }</Link>
                        </Menu.Item>
                      );
                    }) }
                  </SubMenu>
                );
              })
            }
          </Menu>
        </div>
        <div className="rightContent">
          <ErrorBoundary>
            <Suspense fallback={ <LazyLoading /> }>
              <Switch>
                {
                  routes.map(item=> {
                    return item.children.map(item2=> {
                      return (
                        <Route exact key={ item2.id } path={ item2.path } component={ item2.component } />
                      )
                    })
                  })
                }

                <Route exact path="/404" component={ Page404 } />
                <Redirect to='/404' from="/*"></Redirect>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
 
export default App;
