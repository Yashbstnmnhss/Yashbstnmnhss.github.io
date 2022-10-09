1. #### 声明
```cs
abstract class CheckingAttribute<T> 
    requires(child has @attribute(*)) 
    @attribute([_.Parameter<T>, _.TypeParameter<T>, _.Property<T>, _.Field<T>])
{
    [System.Compiler.IDEInteraction(_.CheckingEnsure)]
    public virtual T OnCheck(T val) => val;
}
sealed class RangeAttribute<T shapeof IComparable> : CheckingAttribute<T> @attribute(_.Parameter<T>)
{
    public constructor(public T min, public T max) requires min < max && (min != null || max != null);
    public T OnCheck(T val) ensures return > min && return < max
    {
        if (val < min) throw new OutOfRangeException($"{val} < min");
        if (val > max) throw new OutOfRangeException($"{val} > max");
        return val;
    }
}
sealed class OutOfRangeException(string msg) @throwable(msg);

public void Method([Range<float>(0, float.MaxValue)] float input);

Method(-1); // Error
Method(2); // Okay

public void Method2([Range<float>(0, 10)] string input); 
// Error, Parameter "string" type is not "float" type that defined in RangeAttribute
```
2. #### 类型
3. #### 优化