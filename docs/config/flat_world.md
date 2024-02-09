# Flat World

PNX comes with a highly customizable flat world generator built-in, allowing you to generate the world you desire by modifying the configuration files.

## Configuration

In the 'worlds' configuration of nukkit.yml, you can individually set the generator for each world. For example, here's how you can set the flat generator for a world named 'world':

```yaml
worlds:
  world:
    seed: 114514
    generator: FLAT:2;7,59x1,3x3,2;1;decoration
```

## Generator Parameters

The generator parameters consist of multiple parts separated by semicolons, with each part delimited by colons. For instance:

```yaml
generator: FLAT:2;7,59x1,3x3,2;1;decoration
```

Generator parameters ending with 'decoration' will generate minerals on the map.