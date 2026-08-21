import "./App.css";
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { ProjectStructure } from "./components/topics/ProjectStructure";
import { VirtualDOM } from "./components/topics/VirtualDOM";
import { Components } from "./components/topics/Components";
import { Props } from "./components/topics/Props";
import { State } from "./components/topics/State";
import { LifeCycle } from "./components/topics/LifeCycle";
import { Events } from "./components/topics/Events";
import { RefsFragmentKey } from "./components/topics/RefsFragmentKey";
import { ReactMemo } from "./components/topics/ReactMemo";
import { UseCallback } from "./components/topics/UseCallback";
import { Context } from "./components/topics/Context";
import { ReactRouter } from "./components/topics/ReactRouter";
import { Forms } from "./components/topics/Forms";
import { Storages } from "./components/topics/Storages";
import { HOC } from "./components/topics/HOC";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/project-structure" element={<ProjectStructure />} />
        <Route path="/virtual-dom" element={<VirtualDOM />} />
        <Route path="/components" element={<Components />} />
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
        <Route path="/events" element={<Events />} />
        <Route path="/refs-fragment-key" element={<RefsFragmentKey />} />
        <Route path="/react-memo" element={<ReactMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/context" element={<Context />} />
        <Route path="/react-router" element={<ReactRouter />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/storages" element={<Storages />} />
        <Route path="/hoc" element={<HOC />} />
      </Route>
    </Routes>
  );
}

export default App;
