class DependencyManager {
    private dependencies: Map<string, unknown> = new Map();

    registerDependency<T>(dependencyName: string, dependencyType: T): void {
        this.dependencies.set(dependencyName, dependencyType);
    }

    injectDependency<T>(dependencyName: string): T {
        const dependencyType = this.dependencies.get(dependencyName);
        if (!dependencyType) {
            throw new Error(`Dependency Instance not found: ${dependencyName}`);
        }
        return dependencyType as T;
    }
}

export const dependencyManager = new DependencyManager();
