import ExpoModulesCore

public class SharifyAuthModule: Module {
  public func definition() -> ModuleDefinition {
    Name("SharifyAuth")

    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
