import {IoCContainer} from "../IoCContainer";
import {Class}        from "../types";

/**
 * A decorator to tell the container that this class should be used as the implementation for a given base class.
 * For example:
 *
 * ```
 * class PersonDAO {
 * }
 *
 * @ Provides(PersonDAO)
 * class ProgrammerDAO extends PersonDAO{
 * }
 * ```
 *
 * Is the same that use:
 *
 * ```
 * Container.bind(PersonDAO).to(ProgrammerDAO);
 * ```
 * @param target The base class that will be replaced by this class.
 */
export function Provides<T>(target: Class<T>) {
    return function (to: Function) {
        IoCContainer.bind(target).to(to);
    };
}