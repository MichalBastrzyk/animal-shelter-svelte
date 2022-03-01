<script>
  export let src;
  export let alt;
  export let description;
</script>

<div class="h-[100px] flex flex-col justify-center items-center">
  <div>
    <img src={src} alt={alt}>
  </div>
  <p class="text-lg font-serif">{description}</p>
</div>
