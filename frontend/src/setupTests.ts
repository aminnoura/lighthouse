import { configure as configureEnzyme } from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configureEnzyme({ adapter: new EnzymeReactAdapter() });